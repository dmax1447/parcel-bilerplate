console.log('forms332fsd')

$(document).ready(function() {
  $('.js-select2').select2({ minimumResultsForSearch: -1 });
  $('#phone').inputmask("+7 (999) 999-9999");
  $('#card').inputmask("9999 9999 9999 9999");
  $('#height').inputmask("999");
  $.validator.setDefaults({
    highlight: function(element) {
      $(element).closest(".form-group").addClass("has-error");
    },

    unhighlight: function(element) {
      $(element).closest(".form-group").removeClass("has-error");
    },

    errorElement: "span",

    errorClass: "help-block",

    errorPlacement: function(error, element) {
      if (element.parent(".input-group").length ||
        element.prop("type") === "checkbox" ||
        element.prop("type") === "radio"
      ) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });
  $.validator.addMethod('heightMinMax', (value, element) => {
    return value > 120 && value < 200
  })

  $("#form1").validate({
    rules: {
      email: {
        required: true,
        minlength: 3,
        email: true,
        maxlength: 255
      },
      emailConfirm: {
        required: true,
        equalTo: "#email",
        maxlength: 255
      },
      height: {
        required: true,
        heightMinMax: true
      },
      zipCode: {
        maxlength: 32
      },
      password: {
        required: true,
        minlength: 5
      },
      passwordConfirm: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      termsOfUse: "required"
    },

    messages: {
      email: {
        required: "Please enter your email address.",
      },
      height: {
        heightMinMax: 'Рост должен быть от 120 до 200 см'
      },
      emailConfirm: {
        required: "Confirm your email address.",
        equalTo: "Emails do not match."
      },
      password: {
        required: "Please choose a password."
      },
      passwordConfirm: {
        required: "Confirm your password.",
        equalTo: "Passwords do not match."
      },
      termsOfUse: {
        required: "You must agree to terms of service."
      }
    }
  });


});
