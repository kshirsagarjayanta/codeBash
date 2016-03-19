Template.buyerDetails.onRendered(
    function () 
    {
		CodeBashApp.buyerDetailsOnReady();
    }
);

Template.buyerDetails.helpers({
	buyerList:function()
	{
		return CodeBashApp.buyerDetailsService.getInstance().findBuyer();
	},
	updateObj:function()
	{
		if(Session.get('bid'))
		{
			return CodeBashApp.buyerDetailsService.getInstance().findBuyerById(Session.get('bid'))[0];
		}
	}
});

Template.buyerDetails.events({
	'click #updateDetails':function()
	{
		Session.set('bid',this._id);	
		$("#edit-buyer").modal("show");    
	},
	"submit #editBuyerForm": function(event)
	{
		event.preventDefault();
		var validate = CodeBashApp.buyerDetailsEditBuyerValidate();
		console.log(validate);
		if(validate =='true')
		{
			console.log("inside edit submit");
			var name =    event.target.buyerName.value;
			var address = event.target.buyerAddress.value;
			var phoneNo = event.target.buyerPhoneNo.value;
			var emailId = event.target.buyerEmailId.value;
			var bankName = event.target.bankName.value;
			var branch = event.target.branchName.value;
			var IFSCCode = event.target.IFSC.value;
			var accountNumber = event.target.accountNumber.value;
			CodeBashApp.buyerDetailsService.getInstance().updateBuyer(Session.get('bid'),name,address,phoneNo,emailId,bankName,branch,IFSCCode,accountNumber);
			Session.set('bid','');
			$("#edit-buyer").modal("hide");    
			event.target.buyerName.value = '';
		    event.target.buyerAddress.value = '';
			event.target.buyerPhoneNo.value = '';
			event.target.buyerEmailId.value = '';
			event.target.bankName.value = '';
			event.target.branchName.value = '';
			event.target.IFSC.value = '';
			event.target.accountNumber.value = '';
		}
			
			
	},
	"submit #newBuyerForm": function(event)
	{
		event.preventDefault();
		var validate = CodeBashApp.buyerDetailsNewBuyerValidate();
		if(validate == 'true')
		{
			console.log("inside submit event");
			var name = event.target.newBuyerName.value;
			var address = event.target.newBuyerAddress.value;
			var phoneNo = event.target.newBuyerPhoneNo.value;
			var emailId = event.target.newBuyerEmailId.value;
			var bankName = event.target.newBankName.value;
			var branch = event.target.newBranchName.value;
			var IFSCCode = event.target.newIFSC.value;
			var accountNumber = event.target.newAccountNumber.value;
			var newBuyer = CodeBashApp.buyerDetailsVO(name,address,phoneNo,emailId,bankName,branch,IFSCCode,accountNumber)
			CodeBashApp.buyerDetailsService.getInstance().addBuyer(newBuyer);		
			event.target.newBuyerName.value = '';
			event.target.newBuyerAddress.value = '';
			event.target.newBuyerPhoneNo.value = '';
			event.target.newBuyerEmailId.value = '';
			event.target.newBankName.value = '';
			event.target.newIFSC.value = '';
			event.target.newAccountNumber.value = '';
			$("#new-buyer").modal("hide");    
		}
	},
	'click #deleteBuyerId': function()
	{
		Session.set('deleteId',this._id);
		$("#deleteModal").modal("show");
	},
	'click #deleteBuyer': function()
	{
		CodeBashApp.buyerDetailsService.getInstance().deleteBuyer(Session.get('deleteId'));
	},
	'click #newbuyermodal':function()
	{
		$("#new-buyer").modal("show");    
	},
	'click #cancelNewBuyer':function()
	{
		$("#newBuyerName").val('');
		$("#newBuyerAddress").val('');
		$("#newBuyerPhoneNo").val('');
		$("#newBuyerEmailId").val('');
		$("#newBankName").val('');
		$("#newIFSC").val('');
		$("#newAccountNumber").val('');
	    $("#newBuyerNameGroup").removeClass('form-group has-error has-feedback');
    	$("#newBuyerNameGroup").addClass('form-group');
    	$("#newBuyerNameSpan").html('');
	    $("#newBuyerAddressGroup").removeClass('form-group has-error has-feedback');
    	$("#newBuyerAddressGroup").addClass('form-group');
    	$("#newBuyerAddressSpan").html('');
	    $("#newBuyerPhoneNoGroup").removeClass('form-group has-error has-feedback');
    	$("#newBuyerPhoneNoGroup").addClass('form-group');
    	$("#newBuyerPhoneNoSpan").html('');
   	    $("#newBuyerEmailIdGroup").removeClass('form-group has-error has-feedback');
	    $("#newBuyerEmailIdGroup").addClass('form-group');
    	$("#newBuyerEmailIdSpan").html('');
	    $("#newBankNameGroup").removeClass('form-group has-error has-feedback');
    	$("#newBankNameGroup").addClass('form-group');
    	$("#newBankNameSpan").html('');
	    $("#newBranchNameGroup").removeClass('form-group has-error has-feedback');
    	$("#newBranchNameGroup").addClass('form-group');
    	$("#newBranchNameSpan").html('');
	    $("#newIFSCGroup").removeClass('form-group has-error has-feedback');
    	$("#newIFSCGroup").addClass('form-group');
    	$("#newIFSCSpan").html('');
	    $("#newAccountNumberGroup").removeClass('form-group has-error has-feedback');
    	$("#newAccountNumberGroup").addClass('form-group');
    	$("#newAccountNumberSpan").html('');
	},
	'click #editBuyerCancel':function()
	{
	    $("#buyerNameGroup").removeClass('form-group has-error has-feedback');
    	$("#buyerNameGroup").addClass('form-group');
    	$("#buyerNameSpan").html('');
	    $("#buyerAddressGroup").removeClass('form-group has-error has-feedback');
    	$("#buyerAddressGroup").addClass('form-group');
    	$("#buyerAddressSpan").html('');
	    $("#buyerPhoneNoGroup").removeClass('form-group has-error has-feedback');
    	$("#buyerPhoneNoGroup").addClass('form-group');
    	$("#buyerPhoneNoSpan").html('');
   	    $("#buyerEmailIdGroup").removeClass('form-group has-error has-feedback');
	    $("#buyerEmailIdGroup").addClass('form-group');
    	$("#buyerEmailIdSpan").html('');
	    $("#bankNameGroup").removeClass('form-group has-error has-feedback');
    	$("#bankNameGroup").addClass('form-group');
    	$("#bankNameSpan").html('');
	    $("#BranchNameGroup").removeClass('form-group has-error has-feedback');
    	$("#BranchNameGroup").addClass('form-group');
    	$("#BranchNameSpan").html('');
	    $("#IFSCGroup").removeClass('form-group has-error has-feedback');
    	$("#IFSCGroup").addClass('form-group');
    	$("#IFSCSpan").html('');
	    $("#AccountNumberGroup").removeClass('form-group has-error has-feedback');
    	$("#AccountNumberGroup").addClass('form-group');
    	$("#AccountNumberSpan").html('');
	}

});