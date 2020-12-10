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


  const $form = $('#form2');
  const $fileInputs = $form.find('input[type=file]');
  const fileInputsDomCollection = $form[0].querySelectorAll('input[type=file]')
  const $btnSubmit = $form.find('button[type=submit]');

  function onFileInputChange() {
    setInputValidationStatus(this, isFileInputValid(this));
  }

  function setInputValidationStatus(input, valid) {
    const $label = $(input).prev();
    if (valid) {
      $label.addClass('valid');
      $label.removeClass('invalid');
    } else {
      $label.addClass('invalid');
      $label.removeClass('valid');
    }
  }

  function getFileTemplate({name}) {
    return `
      <li>${name}</li>
    `.trim();
  }

  function displayFileList() {
    const list = [...this.files];
    const $list = $(this).next()
    const listElements = list.map(item => getFileTemplate(item)).join('');
    $list.html(listElements)
  }

  function isFileInputValid(input) {
    const minFilesCount = $(input).attr('data-min-files') || 1;
    const files = [...input.files];
    const fileSizeLimit = 1000000; //in bytes
    return files.length >= minFilesCount && files.every(item => item.size < fileSizeLimit)
  }

  function isFormValid() {
    const isValid = [...fileInputsDomCollection].every((input) => isFileInputValid(input));
    $btnSubmit.attr('disabled', !isValid);
    console.log('is form valid: ', isValid);

  }

  $fileInputs.on('change', onFileInputChange);
  $fileInputs.on('change', displayFileList);
  $fileInputs.on('change', isFormValid);
  console.log(fileInputsDomCollection);

});
