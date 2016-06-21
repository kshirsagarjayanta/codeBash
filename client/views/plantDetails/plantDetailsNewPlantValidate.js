CodeBashApp.plantDetailsNewPlantValidate = function(){
   	 var validate = 'false';
     var regexWhitespace = /^\S{3,}$/;
     var flagArray = [];
     var specialCharRegex = /[^\w\s]/gi;
     var str;
        if(validate == 'false')
        {
            if($("#newPlantName").val()=='')
            {
                flagArray.push(1);        
            }
            if($("#newPlantName").val().length<4 || $("#newPlantName").val().length>20)
            {
                str = $.trim($("#newPlantName").val());
                var cleaned = str.replace(/\s+/g, "");
                if(cleaned.length > 20 || cleaned.length<4)
                {
                    flagArray.push(2); 
                }
               
            }   
            if($("#newPlantScientificName").val()=='')
            {
                flagArray.push(3);
            }
            if($("#newPlantScientificName").val().length<4 || $("#newPlantScientificName").val().length>20 )
            {
                str = $.trim($("#newPlantScientificName").val());
                var cleaned = str.replace(/\s+/g, "");
                if(cleaned.length > 20 || cleaned.length<4)
                {
                    flagArray.push(4); 
                }                  
            } 
            if($("#newPlantType").val()=='')
            {
              flagArray.push(5);  
            } 
            if($("#newPlantCategory").val()=='')
            {
              flagArray.push(6);  
            } 
            if(!regexWhitespace.test($("#newPlantName").val()))
            {
                if($.trim($("#newPlantName").val()).length === 0)
                {
                    flagArray.push(7);
                }
            }
            if(!regexWhitespace.test($("#newPlantScientificName").val()))
            {
                if($.trim($("#newPlantScientificName").val()).length == 0)
                {  
                    flagArray.push(8);
                }
            }
            if(specialCharRegex.test($("#newPlantName").val()))
            {
                flagArray.push(9);
            }
            if(specialCharRegex.test($("#newPlantScientificName").val()))
            {
                flagArray.push(10);
            }
            if(flagArray.length == 0)
            {
                validate = "true";
                console.log("validate value-->"+validate);
            }       
        }
        for(var i=0;i<4;i++)
        {
            console.log("index-->"+i+"  value="+flagArray[i]);
        }
     
        if(validate !='true')
        {

            for (var i = 0; i < flagArray.length; i++) {
                console.log('inside for loop');
                switch(flagArray[i])
                {
                    case 1: $("#newPlantNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantNameSpan").html('please enter name');
                            break;
                    case 2: $("#newPlantNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantNameSpan").html('name should have minimum four characters and maximum 20 characters');                
                            break;
                    case 3: $("#newPlantScientificNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantScientificNameSpan").html('please enter Scientific name');               
                            break;
                    case 4: $("#newPlantScientificNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantScientificNameSpan").html('Scientific name should have four characters and maximum 20 characters');    
                            break;
                    case 5: $("#newPlantTypeGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantTypeSpan").html('Please select plant type');    
                            break;
                    case 6: $("#newPlantCategoryGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantCategorySpan").html('Please select plant Category');    
                            break;
                    case 7: $("#newPlantNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantNameSpan").html('plant name cannot have white spaces');
                            break;
                    case 8: $("#newPlantScientificNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantScientificNameSpan").html('Scientific name cannot have white spaces');               
                            break;
                    case 9: $("#newPlantNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantNameSpan").html('plant Name cannot have special Symbols');
                            break;
                    case 10:$("#newPlantScientificNameGroup").addClass('form-group has-error has-feedback');                 
                            $("#newPlantScientificNameSpan").html('Scientific name  cannot have special Symbols');               
                            break;
                    
                }
            };
        }
        return validate;    
};