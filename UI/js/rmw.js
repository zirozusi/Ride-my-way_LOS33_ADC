function swap(ref){
	if(ref.id == "login") {
	    document.getElementById("form-body").classList.remove('active');
	    ref.parentNode.classList.remove('signup');
	}
	else{
	        document.getElementById("form-body").classList.add('active');
	        ref.parentNode.classList.add('signup');
	}
}