function validateEmail(x) {
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    else
    {
        return true;
    }
}
CodeBashApp.sellerDetailsNewSellerValidate=function(){
  var validate = 'false';
  var flagArray=[];
  var regexIFSC = /^[^\s]{4}\d{7}$/;
  var regexWhitespace = /^\S{3,}$/;
  var specialCharRegex = /[^\w\s]/gi;
  var str;
  if(validate == 'false')
  {
    if($("#newSellerName").val()=='')
    {
        flagArray.push(1);                 
    }

    if($("#newSellerName").val().length > 30)
    {
        str = $.trim($("#newSellerName").val());
        var cleaned = str.replace(/\s+/g, "");
        if(cleaned.length > 30)
        {
            flagArray.push(2);
        }
    }

    if($("#newSellerAddress").val()=='')
    {
        flagArray.push(3);    
    }

    if($("#newSellerAddress").val().length>90)
    {
        str = $.trim($("#newSellerAddress").val());
        var cleaned = str.replace(/\s+/g, "");
        if(cleaned.length > 90)
        {
            flagArray.push(4);
        }   
    }

    if($("#newSellerPhoneNo").val()=='')
    {
        flagArray.push(5);
    }

    if($("#newSellerPhoneNo").val().length>10)
    {
        flagArray.push(6); 
    }

    if($("#newSellerEmailId").val())
    {
        if(!validateEmail($("#newSellerEmailId").val()))
        {
            flagArray.push(7); 
        }
    }

    if($("#newBankName").val()=='')
    {
        flagArray.push(8);
    }

    if($("#newBankName").val().length>50)
    {
        str = $.trim($("#newBankName").val());
        var cleaned = str.replace(/\s+/g, "");
        if(cleaned.length > 50)
        {
            flagArray.push(9);
        }
    }

    if($("#newBranchName").val()=='')
    {
        flagArray.push(10); 
    }

    if($("#newBranchName").val().length>50)
    {
        str = $.trim($("#newBranchName").val());
        var cleaned = str.replace(/\s+/g, "");
        if(cleaned.length > 50)
        {
            flagArray.push(11);
        }
    }

    if($("#newIFSC").val()=='')
    {
        flagArray.push(12); 
    }

    if($("#newIFSC").val().length != 11 || $("#newIFSC").val().length > 11 ||  $("#newIFSC").val().length < 11  )
    {
        flagArray.push(13);
    }

    if($("#newAccountNumber").val()=='')
    {
        flagArray.push(14);
    }

    if($("#newAccountNumber").val().length != 15)
    {
        flagArray.push(15);
    }
    if($("#newAccountNumber").val() != $("#newConfirmAccountNumber").val())
    {
        flagArray.push(16);
    }
    if (!regexIFSC.test($("#newIFSC").val()))
    {
        console.log('regex evaluated');
        flagArray.push(17);
    }


    if(!regexWhitespace.test($("#newSellerName").val()))
    {
        if($.trim($("#newSellerName").val()).length == 0)
        {
            flagArray.push(19);
        }
    }
    if(!regexWhitespace.test($("#newSellerAddress").val()))
    {
        if($.trim($("#newSellerAddress").val()).length==0)
        {
            flagArray.push(20);
        }
    }
    if(!regexWhitespace.test($("#newBankName").val()))
    {
        if($.trim($("#newBankName").val()).length == 0){
            flagArray.push(21);
        }
    }
    if(!regexWhitespace.test($("#newBranchName").val()))
    {
        if($.trim($("#newBranchName").val()).length == 0){
            flagArray.push(22);
        }
    }
    if(specialCharRegex.test($("#newBankName").val()))
    {
        flagArray.push(23);
    }
    if(specialCharRegex.test($("#newBranchName").val()))
    {
        flagArray.push(24);
    }
    if(specialCharRegex.test($("#newSellerName").val()))
    {
        flagArray.push(25);
    }

    if(flagArray.length == 0)
    {
        validate = 'true';    
    }      
}
if(validate != 'true')
{
    for (var i = 0; i < flagArray.length; i++) {
        console.log('inside for loop');
        switch(flagArray[i])
        {
            case 1: event.preventDefault();
            $("#newSellerNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerNameSpan").html('please enter name');
            break;
            case 2:event.preventDefault();
            $("#newSellerNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerNameSpan").html('name should be maximum 30 characters');
            break;
            case 3:event.preventDefault();
            $("#newSellerAddressGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerAddressSpan").html('please enter Address');
            break;
            case 4:event.preventDefault();
            $("#newSellerAddressGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerAddressSpan").html('Address must be max 90 characters');
            break;
            case 5: event.preventDefault();
            $("#newSellerPhoneNoGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerPhoneNoSpan").html('please enter Phone no');                
            break;
            case 6: event.preventDefault();
            $("#newSellerPhoneNoGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerPhoneNoSpan").html('Phone no must be max 10 digits');                
            break;
            case 7:event.preventDefault();
            $("#newSellerEmailIdGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerEmailIdSpan").html('please enter valid emailId');
            break;
            case 8:event.preventDefault();
            $("#newBankNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBankNameSpan").html('please enter bank Name');
            break;
            case 9: event.preventDefault();
            $("#newBankNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBankNameSpan").html(' bank Name must be max 50 characters');
            break;
            case 10: event.preventDefault();
            $("#newBranchNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBranchNameSpan").html('please enter BranchName');
            break;
            case 11: event.preventDefault();
            $("#newBranchNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBranchNameSpan").html('BranchName must be max 50 characters');
            break;
            case 12:event.preventDefault();
            $("#newIFSCGroup").addClass('form-group has-error has-feedback');                 
            $("#newIFSCSpan").html('please enter IFSC code');
            break;
            case 13:event.preventDefault();
            $("#newIFSCGroup").addClass('form-group has-error has-feedback');                 
            $("#newIFSCSpan").html('IFSC code must be 11 characters');
            break;
            case 14: event.preventDefault();
            $("#newAccountNumberGroup").addClass('form-group has-error has-feedback');                 
            $("#newAccountNumberSpan").html('please enter Account Number');
            break;
            case 15:event.preventDefault();
            $("#newAccountNumberGroup").addClass('form-group has-error has-feedback');                 
            $("#newAccountNumberSpan").html('Account Number must be 15 digits');
            break;
            case 16:event.preventDefault();
            $("#newAccountNumberGroup").addClass('form-group has-error has-feedback');                 
            $("#newAccountNumberSpan").html('Account Number and Confirm Account Number values must be same');
            $("#newConfirmAccountNumberGroup").addClass('form-group has-error has-feedback');                 
            $("#newConfirmAccountNumberSpan").html('Account Number and Confirm Account Number values must be same');
            break;
            case 17:event.preventDefault();
            $("#newIFSCGroup").addClass('form-group has-error has-feedback');                 
            $("#newIFSCSpan").html('pleas enter valid IFSC code ');
            break;
            case 19: event.preventDefault();
            $("#newSellerNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerNameSpan").html('name cannot have white space');
            break;
            case 20:event.preventDefault();
            $("#newSellerAddressGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerAddressSpan").html('Address cannot have white space');
            break;
            case 21:event.preventDefault();
            $("#newBankNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBankNameSpan").html(' bank Name cannot have white space');
            break;
            case 22:event.preventDefault();
            $("#newBranchNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBranchNameSpan").html('BranchName cannot have white space');
            break;
            case 23:event.preventDefault();
            $("#newBankNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBankNameSpan").html('bank Name cannot have special symbols');
            break;
            case 24:event.preventDefault();
            $("#newBranchNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newBranchNameSpan").html('BranchName cannot have special symbols');
            break;
            case 25:event.preventDefault();
            $("#newSellerNameGroup").addClass('form-group has-error has-feedback');                 
            $("#newSellerNameSpan").html('name cannot have special Symbols');
            break;
        }
    }
}
return validate;    
};