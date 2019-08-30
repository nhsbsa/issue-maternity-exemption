// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// ********************************
// MATEX (VERSION 1)
// ********************************

// ********************************
// ISSUE
// ********************************

// Mother present?
router.post('/v1/issue-maternity-exemption-certificates/signed-in/mother-present', function (req, res) {

    var motherPresent = req.session.data['mother-present']
  
    if (motherPresent  === "yes"){
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/about-mother')
    }
    else if (motherPresent === "no") {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/date-met-with-mother')
    }
    else {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/mother-present-error')
    }
  
})

// Date met with mother
router.post('/v1/issue-maternity-exemption-certificates/signed-in/date-met-with-mother', function (req, res) {

    var dateMetWithMother = req.session.data['date-met-with-mother']
  
    if (dateMetWithMother){
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/about-mother')
    }
    else {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/date-met-with-mother-error')
    }
  
})

// About mother
router.post('/v1/issue-maternity-exemption-certificates/signed-in/about-mother', function (req, res) {

    var mothersFirstName = req.session.data['mothers-first-name']
    var mothersLastName = req.session.data['mothers-last-name']
    var mothersDateOfBirth = req.session.data['mothers-date-of-birth']
    var mothersNHSNumber = req.session.data['mothers-NHS-number']
    var mothersPostcode = req.session.data['mothers-postcode']
    var dueBirthDate = req.session.data['due-birth-date']
  
    if (mothersFirstName && mothersLastName && mothersDateOfBirth && mothersNHSNumber && mothersPostcode && dueBirthDate){
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/mother-exemption-method')
    }
    else {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/about-mother-error')
    }
  
})

// Mother exemption method
router.post('/v1/issue-maternity-exemption-certificates/signed-in/mother-exemption-method', function (req, res) {

    var motherExemptionMethod = req.session.data['mother-exemption-method']
  
    if (motherExemptionMethod === "email"){
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/mother-email-address')
    }
    else if (motherExemptionMethod === "post") {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/mother-postal-address')
    }
    else {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/mother-exemption-method-error')
    }
  
})

// Mothers email address
router.post('/v1/issue-maternity-exemption-certificates/signed-in/mother-email-address', function (req, res) {

    var mothersEmailAddress = req.session.data['mothers-email-address']
  
    if (mothersEmailAddress){
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/check-your-answers')
    }
    else {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/mother-email-address-error')
    }
  
})

// Mothers postal address
router.post('/v1/issue-maternity-exemption-certificates/signed-in/mother-postal-address', function (req, res) {

    var mothersBuildingName = req.session.data['mothers-building-name']
    var mothersStreetName = req.session.data['mothers-street-name']
    var mothersTownCity = req.session.data['mothers-town-city']
    var mothersPostalPostcode = req.session.data['mothers-postal-postcode']
  
    if (mothersBuildingName && mothersStreetName && mothersTownCity && mothersPostalPostcode){
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/check-your-answers')
    }
    else {
      res.redirect('/v1/issue-maternity-exemption-certificates/signed-in/mother-postal-address-error')
    }
  
})

// ********************************
// REGISTER
// ********************************

// Have NHSMail address

router.post('/v1/issue-maternity-exemption-certificates/register/have-nhs-mail', function (req, res) {

  var nhsMail = req.session.data['nhs-mail']

  if (nhsMail === "yes"){
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address')
  }
  else if (nhsMail === "no") {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-kickout')
  }
  else {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/have-nhs-mail-error')
  }

})

// NHSMail address
router.post('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address', function (req, res) {

  var nhsMailAddress = req.session.data['nhs-mail-address']

  if (nhsMailAddress){
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address-confirm')
  }
  else {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address-error')
  }

})

// NHSMail address confirm

router.post('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address-confirm', function (req, res) {

  var nhsMailAddressConfirm = req.session.data['nhs-mail-address-confirm']

  if (nhsMailAddressConfirm === "yes"){
    res.redirect('/v1/issue-maternity-exemption-certificates/register/email-confirmation-sent')
  }
  else if (nhsMailAddressConfirm === "no") {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address')
  }
  else {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address-confirm-error')
  }

})

// Email confirmation sent
router.post('/v1/issue-maternity-exemption-certificates/register/email-confirmation-sent', function (req, res) {

  var emailConfirmationSent = req.session.data['nhs-mail-address']

  if (emailConfirmationSent){
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address-confirm-email')
  }
  else {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/email-confirmation-sent-error')
  }

})

// NHSMail address confirm email

router.post('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address-confirm-email', function (req, res) {

  var nhsMailAddressConfirmEmail = req.session.data['nhs-mail-address-confirm-email']

  if (nhsMailAddressConfirmEmail === "yes"){
    res.redirect('/v1/issue-maternity-exemption-certificates/register/email-confirmation-sent')
  }
  else if (nhsMailAddressConfirmEmail === "no") {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/email-confirmation-sent-error')
  }
  else {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/nhs-mail-address-confirm-email-error')
  }

})

// User details
router.post('/v1/issue-maternity-exemption-certificates/register/register', function (req, res) {

  var usersLastName = req.session.data['users-last-name']
  var usersNMCPin = req.session.data['users-nmc-pin']
  var usersDOBDay = req.session.data['users-dob-day']
  var usersDOBMonth = req.session.data['users-dob-month']
  var usersDOBYear = req.session.data['users-dob-year']

  if (usersLastName && usersNMCPin && usersDOBDay && usersDOBMonth && usersDOBYear){
    res.redirect('/v1/issue-maternity-exemption-certificates/register/check-your-answers')
  }
  else {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/register-error')
  }

})

// User registration - check your answers
router.post('/v1/issue-maternity-exemption-certificates/register/check-your-answers', function (req, res) {

  var userConfirmation = req.session.data['user-confirmation']

  if (userConfirmation){
    res.redirect('/v1/issue-maternity-exemption-certificates/start')
  }
  else {
    res.redirect('/v1/issue-maternity-exemption-certificates/register/check-your-answers-error')
  }

})