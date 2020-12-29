	document.addEventListener("DOMContentLoaded",function(){
		var searchBTN = document.querySelector(".search-btn"),
			cancelBTN = document.querySelector(".cancel-btn"),
			searchbox = document.querySelector(".searchbox"),
			searchinput = document.querySelector("input"),
			slides = document.querySelectorAll(".homeslide ul li "),
			chuyenslide = document.querySelectorAll(".chuyenslide ul li");
		var thoigian = setInterval(function(){ autoSlide() },10000);

		searchBTN.onclick = function(){
			searchbox.classList.add("active");
			searchBTN.classList.add("active");
			searchinput.classList.add("active");
			cancelBTN.classList.add("active");
		}

		cancelBTN.onclick = function(){
			searchbox.classList.remove("active");
			searchBTN.classList.remove("active");
			searchinput.classList.remove("active");
			cancelBTN.classList.remove("active");
		}

		// chinh mau cho nut khi click
		for (var i = 0; i < chuyenslide.length; i++) {
			chuyenslide[i].addEventListener('click', function(){
				//truoc tien huy chuyen dong
				clearInterval(thoigian);
				// bo slideon truoc do
				for (var i = 0; i < chuyenslide.length; i++) {
					chuyenslide[i].classList.remove("slideon");
				}
				this.classList.add("slideon");
				// het
				// tinh vi tri cua nut khi click
				var nuton = this;
				var nutvitri = 0;
				for (nutvitri = 0; nuton = nuton.previousElementSibling; nutvitri++) {}
					// console.log("vi tri nut kich hoat la =" + nutvitri )
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove("active");
					slides[nutvitri].classList.add("active");
				}
			})
		} //Het su kien cho nut

		

		function autoSlide(){
			
			//tinh slide dang hien thi
			var vitrislide = 0;
			var slidehientai= document.querySelector(".homeslide ul li.active");
			//console.log(slidehientai.previousElementSibling);
			//console.log(slidehientai);
				for (vitrislide = 0; slidehientai = slidehientai.
					previousElementSibling; vitrislide++) {}
					//neu chua den slide cuoi cung tuc la vitrislide <= slides.length -> hoat dong binh thuong
				if(vitrislide < (slides.length-1)){
					for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove("active");
					chuyenslide[i].classList.remove("slideon");
					}
					slides[vitrislide].nextElementSibling.classList.add("active");
					chuyenslide[vitrislide].nextElementSibling.classList.add("slideon");
				}
				else{
					for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove("active");
					chuyenslide[i].classList.remove("slideon");
					}
					slides[0].classList.add("active");
					chuyenslide[0].classList.add("slideon");
				}

				//console.log("vi tri hien tai la" + vitrislide);
		}
		//het auto slide

		var spslide = document.querySelectorAll(".sanpham ul li "),
    		chuyenslidesp = document.querySelectorAll(".danhmuc ul li");

			for (var i = 0; i < chuyenslidesp.length; i++) {
			            chuyenslidesp[i].addEventListener('click', function(){
			                for (var i = 0; i < chuyenslidesp.length; i++) {
			                    chuyenslidesp[i].classList.remove("on");
			                }
			                this.classList.add("on");
			                // het
			                // tinh vi tri cua nut khi click
			                var spon = this;
			                var nutvitri = 0;
			                for (nutvitri = 0; spon = spon.previousElementSibling; nutvitri++) {}
			                    // console.log("vi tri nut kich hoat la =" + nutvitri )
			                for (var i = 0; i < spslide.length; i++) {
			                    spslide[i].classList.remove("active");
			                    spslide[nutvitri].classList.add("active");
			                }
			            })
			        }
		//het spslide

  		var menucuon = document.querySelector(".menu"),
  			trangthaimenucuon = "duoi45";

  		window.addEventListener('scroll',function(){
  			if(window.pageYOffset > 45){
  				if(trangthaimenucuon == "duoi45"){
  					trangthaimenucuon = "tren45";
  					menucuon.classList.add("menumoi");
  				}
  			}

  			 else if(window.pageYOffset < 45){
  				if(trangthaimenucuon == "tren45"){
  					trangthaimenucuon = "duoi45";
  					menucuon.classList.remove("menumoi");
  				}
  			}

  		})
	})