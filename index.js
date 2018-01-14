$('td').on('dblclick',function(){
			console.log($(this)[0].innerText);
		})
		$("td").hover(function(){
	        this.focus();
		    if(window.getSelection){
		        var range=document.createRange();
		        range.selectNodeContents(this);
		        var selection = window.getSelection();
		        selection.removeAllRanges();
		        selection.addRange(range);
		    }else if(document.selection){
		        //for ie
		        var range=document.body.createTextRange()
		        range.moveToElementText(this)
		        range.select();
		    }
		  },function(){
			    if(window.getSelection){
			        var range=document.createRange();
			        range.selectNodeContents(this);
			        var selection = window.getSelection();
			        selection.removeAllRanges();
			        document.execCommand("Copy");
		        }else if(document.selection){
		        //for ie
		        var range=document.body.createTextRange()
		        range.moveToElementText(none);
		    }
		});