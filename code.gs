// متوسطة ابن كثير ببريدة - 1448
// انسخ هذا كـ Code.gs في script.google.com

var FOLDER_ID = '19vxA8JkZGH6qfHfkgCgx1sl0k29jDgXK';
var SHEET_NAME = 'مشاريع الطلاب';

function doGet(e) {
  var page = 'index';
  if (e && e.parameter && e.parameter.page) page = e.parameter.page;
  var tpl = HtmlService.createTemplateFromFile(page);
  return tpl.evaluate()
    .setTitle(page === 'admin' ? 'لوحة التحكم - ابن كثير ببريدة' : 'متوسطة ابن كثير ببريدة - مشاريع الطلاب 1448')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.action === 'upload') return ContentService.createTextOutput(JSON.stringify(uploadFile(data.fileName, data.fileMime, data.base64, data.studentName, data.className, data.title, data.description, data.section, data.thumb))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'getAll') return ContentService.createTextOutput(JSON.stringify({projects: getAllProjects(), sections: getSections(), classes: getClasses(), settings: publicSettings()})).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'approve') return ContentService.createTextOutput(JSON.stringify(approveProject(data.id, data.approve))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'approveAll') return ContentService.createTextOutput(JSON.stringify(approveAll())).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'delete') return ContentService.createTextOutput(JSON.stringify(deleteProject(data.id))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'update') return ContentService.createTextOutput(JSON.stringify(updateProject(data.id, data.studentName, data.className, data.title, data.description))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'setSection') return ContentService.createTextOutput(JSON.stringify(setSection(data.id, data.section))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'addSection') return ContentService.createTextOutput(JSON.stringify(addSection(data.name))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'deleteSection') return ContentService.createTextOutput(JSON.stringify(deleteSection(data.id))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'getClasses') return ContentService.createTextOutput(JSON.stringify(getClasses())).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'addClass') return ContentService.createTextOutput(JSON.stringify(addClass(data.name))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'deleteClass') return ContentService.createTextOutput(JSON.stringify(deleteClass(data.id))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'adminLogin') return ContentService.createTextOutput(JSON.stringify(adminLogin(data.pass))).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'getSettings') return ContentService.createTextOutput(JSON.stringify(publicSettings())).setMimeType(ContentService.MimeType.JSON);
    if (data.action === 'updateSettings') return ContentService.createTextOutput(JSON.stringify(updateSettings(data))).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  var ss = null;
  var props = PropertiesService.getScriptProperties();
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch (e) { ss = null; }
  if (!ss) {
    var savedId = props.getProperty('SHEET_ID');
    if (savedId) {
      try { ss = SpreadsheetApp.openById(savedId); } catch (e) { ss = null; }
    }
    if (!ss) {
      try {
        ss = SpreadsheetApp.create('مشاريع ابن كثير 1448 - ' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy'));
        props.setProperty('SHEET_ID', ss.getId());
      } catch (e) {
        props.setProperty('STORE_TYPE', 'props');
        return null;
      }
    }
  }
  props.setProperty('STORE_TYPE', 'sheet');
  props.setProperty('SHEET_ID', ss.getId());
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['id', 'studentName', 'className', 'title', 'description', 'fileName', 'fileUrl', 'fileId', 'approved', 'createdAt', 'mime', 'fileType', 'section', 'thumb']);
    sheet.setFrozenRows(1);
  } else {
    var lastCol = sheet.getLastColumn();
    if (lastCol > 0) {
      var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
      if (headers && headers.indexOf('section') === -1) {
        sheet.getRange(1, lastCol + 1).setValue('section');
        lastCol = sheet.getLastColumn();
        headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
      }
      if (headers && headers.indexOf('thumb') === -1) {
        sheet.getRange(1, lastCol + 1).setValue('thumb');
      }
    } else {
      sheet.appendRow(['id', 'studentName', 'className', 'title', 'description', 'fileName', 'fileUrl', 'fileId', 'approved', 'createdAt', 'mime', 'fileType', 'section', 'thumb']);
    }
  }
  return sheet;
}

function storeType() {
  var props = PropertiesService.getScriptProperties();
  var t = props.getProperty('STORE_TYPE');
  if (t === 'props') return 'props';
  return 'sheet';
}

function readAllFromProps() {
  var raw = PropertiesService.getScriptProperties().getProperty('PROJECTS_JSON');
  if (!raw) return [];
  try { return JSON.parse(raw); } catch (e) { return []; }
}

function writeAllToProps(arr) {
  PropertiesService.getScriptProperties().setProperty('PROJECTS_JSON', JSON.stringify(arr));
}

function uploadFile(fileName, fileMime, base64Data, studentName, className, title, description, section, thumb) {
  section = section || '';
  thumb = thumb || '';
  var decoded = Utilities.base64Decode(base64Data);
  var blob = Utilities.newBlob(decoded, fileMime, fileName);
  var folder;
  if (FOLDER_ID) {
    folder = DriveApp.getFolderById(FOLDER_ID);
  } else {
    folder = DriveApp.getRootFolder();
  }
  var file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  var fileId = file.getId();
  var fileUrl = 'https://drive.google.com/uc?id=' + fileId;
  var webViewLink = 'https://drive.google.com/file/d/' + fileId + '/view';
  var id = Utilities.getUuid();
  var fileType = 'file';
  if (fileMime && fileMime.indexOf('image/') === 0) fileType = 'image';
  else if (fileMime && fileMime.indexOf('video/') === 0) fileType = 'video';
  else if (fileMime === 'application/pdf') fileType = 'pdf';
  var record = [id, studentName, className, title, description, fileName, fileUrl, fileId, false, new Date().toISOString(), fileMime, fileType, section, thumb];
  var sheet = getOrCreateSheet();
  if (sheet) {
    sheet.appendRow(record);
  } else {
    var arr = readAllFromProps();
    arr.push(record);
    writeAllToProps(arr);
  }
  return { success: true, id: id, fileId: fileId, fileUrl: fileUrl, webViewLink: webViewLink, fileName: fileName, fileType: fileType };
}

function getAllProjects() {
  try {
    if (storeType() === 'props') {
      var parr = readAllFromProps();
      if (!parr || parr.slice === undefined) parr = [];
      return parr.map(function(r) {
        if (!r || r.slice === undefined) return {};
        return { id: r[0], studentName: r[1], className: r[2], title: r[3], description: r[4], fileName: r[5], fileUrl: r[6], fileId: r[7], approved: r[8], createdAt: r[9], mime: r[10], fileType: r[11], section: r[12] || '', thumb: r[13] || '' };
      });
    }
    var sheet = getOrCreateSheet();
    if (!sheet) {
      var parr2 = readAllFromProps();
      if (!parr2 || parr2.slice === undefined) parr2 = [];
      return parr2.map(function(r) {
        if (!r || r.slice === undefined) return {};
        return { id: r[0], studentName: r[1], className: r[2], title: r[3], description: r[4], fileName: r[5], fileUrl: r[6], fileId: r[7], approved: r[8], createdAt: r[9], mime: r[10], fileType: r[11], section: r[12] || '', thumb: r[13] || '' };
      });
    }
    var data = sheet.getDataRange().getValues();
    if (!data || !data.length) return [];
    var headers = data[0] || [];
    var projects = [];
    for (var i = 1; i < data.length; i++) {
      var obj = {};
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = data[i][j];
      }
      if (!obj.section) obj.section = '';
      if (!obj.thumb) obj.thumb = '';
      projects.push(obj);
    }
    return projects;
  } catch (e) {
    return [];
  }
}

function approveProject(id, approve) {
  if (storeType() === 'props' || !getOrCreateSheet()) {
    var arr = readAllFromProps();
    for (var i = 0; i < arr.length; i++) { if (String(arr[i][0]) === String(id)) { arr[i][8] = approve; break; } }
    writeAllToProps(arr); return { success: true };
  }
  var sheet = getOrCreateSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.getRange(i + 1, 9).setValue(approve);
      return { success: true };
    }
  }
  return { error: 'not found' };
}

function approveAll() {
  if (storeType() === 'props' || !getOrCreateSheet()) {
    var arr = readAllFromProps();
    arr.forEach(function(r) { r[8] = true; });
    writeAllToProps(arr); return { success: true };
  }
  var sheet = getOrCreateSheet();
  var lastRow = sheet.getLastRow();
  if (lastRow > 1) sheet.getRange(2, 9, lastRow - 1, 1).setValue(true);
  return { success: true };
}

function deleteProject(id) {
  if (storeType() === 'props' || !getOrCreateSheet()) {
    var arr = readAllFromProps();
    arr = arr.filter(function(r) { return String(r[0]) !== String(id); });
    writeAllToProps(arr); return { success: true };
  }
  var sheet = getOrCreateSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      try { if (data[i][7]) DriveApp.getFileById(data[i][7]).setTrashed(true); } catch(e) {}
      sheet.deleteRow(i + 1);
      return { success: true };
    }
  }
  return { error: 'not found' };
}

function updateProject(id, studentName, className, title, description) {
  if (storeType() === 'props' || !getOrCreateSheet()) {
    var arr = readAllFromProps();
    for (var i = 0; i < arr.length; i++) {
      if (String(arr[i][0]) === String(id)) {
        arr[i][1] = studentName; arr[i][2] = className; arr[i][3] = title; arr[i][4] = description; break;
      }
    }
    writeAllToProps(arr); return { success: true };
  }
  var sheet = getOrCreateSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.getRange(i + 1, 2).setValue(studentName);
      sheet.getRange(i + 1, 3).setValue(className);
      sheet.getRange(i + 1, 4).setValue(title);
      sheet.getRange(i + 1, 5).setValue(description);
      return { success: true };
    }
  }
  return { error: 'not found' };
}

function setSection(id, section) {
  if (storeType() === 'props' || !getOrCreateSheet()) {
    var arr = readAllFromProps();
    for (var i = 0; i < arr.length; i++) {
      if (String(arr[i][0]) === String(id)) { arr[i][12] = section; arr[i][8] = true; break; }
    }
    writeAllToProps(arr); return { success: true };
  }
  var sheet = getOrCreateSheet();
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var secCol = -1;
  for (var j = 0; j < headers.length; j++) {
    if (headers[j] === 'section') { secCol = j + 1; break; }
  }
  if (secCol === -1) {
    secCol = headers.length + 1;
    sheet.getRange(1, secCol).setValue('section');
  }
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.getRange(i + 1, secCol).setValue(section);
      sheet.getRange(i + 1, 9).setValue(true);
      return { success: true };
    }
  }
  return { error: 'not found' };
}

function getSections() {
  var raw = PropertiesService.getScriptProperties().getProperty('SECTIONS_JSON');
  if (!raw) return [];
  try {
    var s = JSON.parse(raw);
    if (!s || s.forEach === undefined) return [];
    return s;
  } catch(e) { return []; }
}

function addSection(name) {
  var sections = getSections();
  var id = Utilities.getUuid();
  sections.push({id: id, name: name});
  PropertiesService.getScriptProperties().setProperty('SECTIONS_JSON', JSON.stringify(sections));
  return {success: true, id: id, name: name};
}

function deleteSection(id) {
  var sections = getSections().filter(function(s){return s.id !== id;});
  PropertiesService.getScriptProperties().setProperty('SECTIONS_JSON', JSON.stringify(sections));
  return {success: true};
}

function getClasses() {
  var raw = PropertiesService.getScriptProperties().getProperty('CLASSES_JSON');
  if (!raw) return [];
  try {
    var s = JSON.parse(raw);
    if (!s || s.forEach === undefined) return [];
    return s;
  } catch(e) { return []; }
}

function addClass(name) {
  var classes = getClasses();
  var id = Utilities.getUuid();
  classes.push({id: id, name: name});
  PropertiesService.getScriptProperties().setProperty('CLASSES_JSON', JSON.stringify(classes));
  return {success: true, id: id, name: name};
}

function deleteClass(id) {
  var classes = getClasses().filter(function(c){return c.id !== id;});
  PropertiesService.getScriptProperties().setProperty('CLASSES_JSON', JSON.stringify(classes));
  return {success: true};
}

var DEFAULT_SETTINGS = {schoolName:'متوسطة ابن كثير ببريدة', tagline:'منصة رفع ملفات المشاريع الطلابية لعام 1448 هـ', heroText:'ارفع مشروعك (صورة / فيديو / ملف) وسيظهر للجميع بعد اعتماد الإدارة.', password:'admin123'};

function getSettings() {
  var s = {};
  for (var k in DEFAULT_SETTINGS) s[k] = DEFAULT_SETTINGS[k];
  var raw = PropertiesService.getScriptProperties().getProperty('SETTINGS_JSON');
  if (raw) {
    try { var p = JSON.parse(raw); for (var k2 in p) s[k2] = p[k2]; } catch(e) {}
  }
  return s;
}

function publicSettings() {
  var s = getSettings();
  delete s.password;
  return s;
}

function adminLogin(pass) {
  return {ok: String(pass) === String(getSettings().password)};
}

function updateSettings(data) {
  var s = getSettings();
  if (data && data.schoolName !== undefined) s.schoolName = String(data.schoolName);
  if (data && data.tagline !== undefined) s.tagline = String(data.tagline);
  if (data && data.heroText !== undefined) s.heroText = String(data.heroText);
  if (data && data.password !== undefined && data.password !== '') s.password = String(data.password);
  PropertiesService.getScriptProperties().setProperty('SETTINGS_JSON', JSON.stringify(s));
  return {success: true, settings: publicSettings()};
}

function serverAction(action, dataJson) {
  var data = JSON.parse(dataJson);
  if (action === 'upload') return uploadFile(data.fileName, data.fileMime, data.base64, data.studentName, data.className, data.title, data.description, data.section, data.thumb);
  if (action === 'getAll') return { projects: getAllProjects(), sections: getSections(), classes: getClasses(), settings: publicSettings() };
  if (action === 'approve') return approveProject(data.id, data.approve);
  if (action === 'approveAll') return approveAll();
  if (action === 'delete') return deleteProject(data.id);
  if (action === 'update') return updateProject(data.id, data.studentName, data.className, data.title, data.description);
  if (action === 'setSection') return setSection(data.id, data.section);
  if (action === 'addSection') return addSection(data.name);
  if (action === 'deleteSection') return deleteSection(data.id);
  if (action === 'getClasses') return getClasses();
  if (action === 'addClass') return addClass(data.name);
  if (action === 'deleteClass') return deleteClass(data.id);
  if (action === 'adminLogin') return adminLogin(data.pass);
  if (action === 'getSettings') return publicSettings();
  if (action === 'updateSettings') return updateSettings(data);
  return { error: 'unknown action' };
}

function setup() {
  var sheet = getOrCreateSheet();
  var ssId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  var msg = 'تم تجهيز الجدول. ';
  if (ssId) {
    msg += 'Sheet ID: ' + ssId;
    msg += ' | فتح الجدول: https://docs.google.com/spreadsheets/d/' + ssId;
  } else {
    msg += 'تم استخدام جدول مرتبط بالمشروع.';
  }
  if (FOLDER_ID) msg += ' | Folder: ' + FOLDER_ID;
  Logger.log(msg);
  return msg;
}
