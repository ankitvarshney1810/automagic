$(document).ready(function(){
    $("#register").click(function(){
        $(".otp-form").show();
        $(".register-form, .bottom").hide();
    });
});


$(document).ready(function(){
    $(".btnmenu").click(function(){
        $(".sidebar").toggleClass('closeside');
        $("header").toggleClass('expand-main');
        $("#content").toggleClass('expand-main');
        $("body").toggleClass('overflow-hide');
    });
});

$(document).ready(function(){
    $(".refund").click(function(){
        $(".refund-box").css('display','block');
        $(".cancel-box").css('display','none');
        $(".refund").addClass('border');
        $(".cancel").removeClass('border');
    });
    $(".cancel").click(function(){
        $(".refund-box").css('display','none');
        $(".cancel-box").css('display','block');
        $(".cancel").addClass('border');
        $(".refund").removeClass('border');
    });
});

$(document).ready(function(){
    $("#add-contact").click(function(){
        $(".add-contact").css("display","grid");
    });
    $("#import-contact").click(function(){
        $(".import-contact").css("display","grid");
    });
    $(".close").click(function(){
        $(".model").css("display","none");
        //$("#add").css("display","inline-block");
    });
});

$(document).ready(function(){
    $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'schedule1') {
            $("#datepicker").prop('disabled', true);     
            $("#timepicker").prop('disabled', true);  

       }
       else if ($(this).attr('id') == 'schedule2'){
            $("#datepicker").prop('disabled', false);  
            $("#timepicker").prop('disabled', false); 
       }
       else if ($(this).attr('id') == 'recurring1'){
            $("#recurrence").css('display', 'none');  
       }
       else if ($(this).attr('id') == 'recurring2'){
            $("#recurrence").css('display', 'block');  
       }
    });
});

$(document).ready(function(){
    $("#destop-view").click(function(){
        $("#email-body").width("100%");
    });
    $("#mobile-view").click(function(){
        $("#email-body").width("375px");
    });
});

$(document).ready(function(){
    $(".template-nav").click(function(){
        var id = $(this).attr('id');
        $("#create-template, #recent-template, #my-template").hide();
        $("#"+id+"-template").show();
        $(".template-nav").removeClass("active");
        $("#"+id).addClass("active");
    });
});

$(document).ready(function(){
    $(".pic-edit").click(function(){
        $("#pic-edit-box").css('display','flex');
    });
    $(".edit-basic-detail").click(function(){
        $("#basic-info-user").css('display','flex');
    });
    $(".Password-update").click(function(){
        $("#Password-update").css('display','flex');
    });
});

$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd/mm/yy"
		,	duration: "fast"
	});
} );

$(function() {

    $('#profile').addClass('dragging').removeClass('dragging');
    });

    $('#profile').on('dragover', function() {
    $('#profile').addClass('dragging')
    }).on('dragleave', function() {
    $('#profile').removeClass('dragging')
    }).on('drop', function(e) {
    $('#profile').removeClass('dragging hasImage');
    
    if (e.originalEvent) {
      var file = e.originalEvent.dataTransfer.files[0];
      console.log(file);
    
      var reader = new FileReader();
    
      //attach event handlers here...
    
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('#profile').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
    
      }
  
    }
    })
    $('#profile').on('click', function(e) {
        console.log('clicked')
        $('#file').click();
    });
    window.addEventListener("dragover", function(e) {
    e = e || event;
    e.preventDefault();
    }, false);
    window.addEventListener("drop", function(e) {
    e = e || event;
    e.preventDefault();
    }, false);
    $('#file').change(function(e) {
    
    var input = e.target;
    if (input.files && input.files[0]) {
      var file = input.files[0];
    
      var reader = new FileReader();
    
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('#profile').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
      }
    }
    })


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});


