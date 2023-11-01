var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var stdDBName = "SCHOOL-DB";
var stdRelationName = "STUDENT-TABLE";
var connToken = "90931539|-31949330549365523|90959905";
$("#stdRoll").focus();

function saveRecNo2LS(jsonObj) {
  var lvData = JSON.parse(jsonObj.data);
  localStorage.setItem("rec_no", lvData.rec_no);
}

function getStdRollAsJsonObj() {
  var stdRoll = $("#stdRoll").val();
  var jsonStr = {
    rollno: stdRoll,
  };
  return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
  saveRecNo2LS(jsonObj);
  var record = JSON.parse(jsonObj.data).record;
  $("#stdName").val(record.name);
  $("#stdClass").val(record.class);
  $("#stdBirthdate").val(record.birthdate);
  $("#stdAddress").val(record.address);
  $("#stdEnroll").val(record.enrollment_date);
}
function validateData() {
  var stdRoll, stdName, stdClass, stdBirthdate, stdAddress, stdEnroll;
  stdRoll = $("#stdRoll").val();
  stdName = $("#stdName").val();
  stdClass = $("#stdClass").val();
  stdBirthdate = $("#stdBirthdate").val();
  stdAddress = $("#stdAddress").val();
  stdEnroll = $("#stdEnroll").val();
  if (stdRoll === "") {
    alert("Roll Number is missing");
    $("#stdRoll").focus();
    return "";
  }
  if (stdName === "") {
    alert("Student name is missing");
    $("#stdName").focus();
    return "";
  }
  if (stdClass === "") {
    alert("Student Class is missing");
    $("#stdClass").focus();
    return "";
  }
  if (stdBirthdate === "") {
    alert("Student Birthdate is missing");
    $("#stdBirthdate").focus();
    return "";
  }
  if (stdAddress === "") {
    alert("Student Address is missing");
    $("#stdAddress").focus();
    return "";
  }
  if (stdEnroll === "") {
    alert("Student Enrollement Date  is missing");
    $("#stdEnroll").focus();
    return "";
  }
  var jsonStrObj = {
    rollno: stdRoll,
    name: stdName,
    class: stdClass,
    birthdate: stdBirthdate,
    address: stdAddress,
    enrollment_date: stdEnroll,
  };
  return JSON.stringify(jsonStrObj);
}

function resetForm() {
  $("#stdRoll").val("");
  $("#stdName").val("");
  $("#stdClass").val("");
  $("#stdBirthdate").val("");
  $("#stdAddress").val("");
  $("#stdAddress").val("");
  $("#stdEnroll").val("");
  $("#stdRoll").prop("disabled", false);
  $("#save").prop("disabled", true);
  $("#update").prop("disabled", true);
  $("#reset").prop("disabled", true);
  $("#empId").focus();
}

function getStd() {
  var stdRollJsonObj = getStdRollAsJsonObj();
  var getRequest = createGET_BY_KEYRequest(
    connToken,
    stdDBName,
    stdRelationName,
    stdRollJsonObj
  );
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(
    getRequest,
    jpdbBaseURL,
    jpdbIRL
  );
  jQuery.ajaxSetup({ async: true });
  if (resJsonObj.status === 400) {
    $("#save").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#stdName").focus();
  } else if (resJsonObj.status === 200) {
    $("#stdRoll").prop("disabled", true);
    fillData(resJsonObj);
    $("#update").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#stdName").focus();
  }
}

function saveData() {
  var jsonStrObj = validateData();
  if (jsonStrObj === "") {
    return "";
  }
  var putRequest = createPUTRequest(
    connToken,
    jsonStrObj,
    stdDBName,
    stdRelationName
  );
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(
    putRequest,
    jpdbBaseURL,
    jpdbIML
  );

  jQuery.ajaxSetup({ async: true });
  console.log(resJsonObj);
  resetForm();
  $("#stdRoll").focus();
}

function updateData() {
  $("#update").prop("disabled", true);
  var jsonStrObj = validateData();
  if (jsonStrObj == "") {
    return;
  }
  alert(jsonStrObj);
  var updateRequest = createUPDATERecordRequest(
    connToken,
    jsonStrObj,
    stdDBName,
    stdRelationName,
    localStorage.getItem("rec_no")
  );
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(
    updateRequest,
    jpdbBaseURL,
    jpdbIML
  );
  jQuery.ajaxSetup({ async: true });
  console.log(resJsonObj);
  resetForm();
  $("#stdRoll").focus();
}
