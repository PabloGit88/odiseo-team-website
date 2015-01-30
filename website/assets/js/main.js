var analyticsHelper = (function(gaq, $){
	
	
	var _pupulate = function(){
		
		$('#main-menu .home').click(
				function(){
					gaq.push(['_trackEvent', 'menu', 'Click', 'Home']);
				}
		);
		$('#main-menu .portfolio').click(
				function(){
					gaq.push(['_trackEvent', 'menu', 'Click', 'Portfolio']);
				}
		);
		$('#main-menu .tecnologia').click(
				function(){
					gaq.push(['_trackEvent', 'menu', 'Click', 'Tecnología']);
				}
		);
		
		$('.brancaApp').click(
				function(){
					gaq.push(['_trackEvent', 'menu', 'Click', 'BrancaApp']);
				}
		);
		
		$('.submenu ul li .hybridapp').click(
				function(){
					gaq.push(['_trackEvent', 'subMenu', 'Click', 'HybridApp']);
				}
		);
		
		
		$('.submenu ul li .eCommerce').click(
				function(){
					gaq.push(['_trackEvent', 'subMenu', 'Click', 'E-Commerce']);
				}
		);
		
		$('.submenu ul li .facebookApp').click(
				function(){
					gaq.push(['_trackEvent', 'subMenu', 'Click', 'Facebook App']);
				}
		);
		
		$('.submenu ul li .twitter').click(
				function(){
					gaq.push(['_trackEvent', 'subMenu', 'Click', 'Twiiter App']);
				}
		);
		
		
		$('.submenu ul li .web').click(
				function(){
					gaq.push(['_trackEvent', 'subMenu', 'Click', 'Web']);
				}
		);
		
	};
	
	return {
		
		populate : _pupulate
		
	}
	
	
})(_gaq, jQuery);

$( document ).ready( analyticsHelper.populate() );