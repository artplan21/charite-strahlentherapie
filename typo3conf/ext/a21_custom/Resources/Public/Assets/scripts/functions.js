/*!
	Slimbox v2.04 - The ultimate lightweight Lightbox clone for jQuery
	(c) 2007-2010 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
(function(F){var O=F(window),B,h,P=-1,t,G,N,C,H,Y,x,r=!window.XMLHttpRequest,y=[],q=document.documentElement,o={},z=new Image(),V=new Image(),R,f,A,n,U,X,s,D,S,b,j,v,T,e,Q,c,L,W;F(function(){F("body").append(F([S=F('<div id="sbOverlay" />')[0],b=F('<div id="sbCenter" />')[0],Q=F('<div id="sbBottomContainer" />')[0]]).css("display","none"));j=F('<div id="sbImage" />').appendTo(b).append(v=F('<div style="position: relative;" />').append([T=F('<a id="prevLink" href="#" />').click(J)[0],e=F('<a id="nextLink" href="#" />').click(g)[0]])[0])[0];c=F('<div id="sbBottom" />').appendTo(Q).append([F('<a id="closeLink" href="#" />').add(S).click(M)[0],X=F('<a id="playLink" href="#" />').click(E)[0],s=F('<a id="pauseLink" href="#" />').click(d)[0],D=F('<a id="saveLink" href="#" target="_blank" />')[0],L=F('<div id="sbCaption" />')[0],W=F('<div id="sbNumber" />')[0],R=F('<div id="sbPresent" />')[0],F('<div style="clear: both;" />')[0]])[0]});F.slimbox=function(ab,aa,Z){B=F.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image ###x### of ###y###",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78],slideshowKeys:[83],allowSave:false,slideshowAutoplay:false,slideshowInterval:3000,slideshowAutoclose:true},Z);if(typeof ab=="string"){ab=[[ab,aa]];aa=0}H=O.scrollTop()+(O.height()/2);Y=B.initialWidth;x=B.initialHeight;F(b).css({top:Math.max(0,H-(x/2)),width:Y,height:x,marginLeft:-Y/2}).show();C=r||(S.currentStyle&&(S.currentStyle.position!="fixed"));if(C){S.style.position="absolute"}F(S).css("opacity",B.overlayOpacity).fadeIn(B.overlayFadeDuration);K();m(1);h=ab;B.loop=B.loop&&(h.length>1);n=B.slideshowAutoplay&&A;return a(aa)};F.fn.slimbox=function(Z,ac,ab){ac=ac||function(ad){ad.rel.match(/present.+/)?f=true:f=false;ad.rel.match(/slideshow.+/)?A=true:A=false;return[ad.href,ad.title]};ab=ab||function(){return true};var aa=this;return aa.unbind("click").click(function(){var af=this,ah=0,ag,ad=0,ae;ag=F.grep(aa,function(aj,ai){return ab.call(af,aj,ai)});for(ae=ag.length;ad<ae;++ad){if(ag[ad]==af){ah=ad}ag[ad]=ac(ag[ad],ad)}return F.slimbox(ag,ah,Z)})};function p(Z){return parseInt(Z.replace(/\D/g,""))}function K(){var aa=O.scrollLeft(),Z=O.width();F([b,Q]).css("left",aa+(Z/2));if(C){F(S).css({left:aa,top:O.scrollTop(),width:Z,height:O.height()})}}function m(Z){if(Z){F("object").add(r?"select":"embed").each(function(ab,ac){y[ab]=[ac,ac.style.visibility];ac.style.visibility="hidden"})}else{F.each(y,function(ab,ac){ac[0].style.visibility=ac[1]});y=[]}var aa=Z?"bind":"unbind";O[aa]("scroll resize",K);F(document)[aa]("keydown",u)}function u(ab){var aa=ab.keyCode,Z=F.inArray;return(Z(aa,B.closeKeys)>=0)?M():(Z(aa,B.nextKeys)>=0)?g():(Z(aa,B.previousKeys)>=0)?J():(Z(aa,B.slideshowKeys)>=0)?I():false}function J(){return a(G)}function g(){return a(N)}function a(Z){if(Z>=0){P=Z;t=h[P][0];G=(P||(B.loop?h.length:0))-1;N=((P+1)%h.length)||(B.loop?0:-1);w();b.className="sbLoading";o=new Image();o.onload=l;o.src=t}return false}function l(){b.className="";F(j).css({backgroundImage:"url("+t+")",visibility:"hidden",display:""});F(v).width(o.width);F([v,T,e]).height(o.height);F(L).html(h[P][1]||"");F(W).html((((h.length>1)&&B.counterText)||"").replace(/###x###/,P+1).replace(/###y###/,h.length));if(f){F(W).css("display","none");F(R).html("").css("display","");for(i=0;i<h.length;i++){var aa=P==i?"act":"no";var Z=F('<a id="pmi'+(i+1)+'" href="#" class="'+aa+'"></a>').click(function(){var ac=p(F(this).attr("id"))-1;d();return a(ac)});i<9?Z.html("0"+(i+1)):Z.html(i+1);Z.appendTo(R)}}else{F(W).css("display","");F(R).html("").css("display","none")}if(G>=0){z.src=h[G][0]}if(N>=0){V.src=h[N][0]}Y=j.offsetWidth;x=j.offsetHeight;var ab=Math.max(0,H-(x/2));if(b.offsetHeight!=x){F(b).animate({height:x,top:ab},B.resizeDuration,B.resizeEasing)}if(b.offsetWidth!=Y){F(b).animate({width:Y,marginLeft:-Y/2},B.resizeDuration,B.resizeEasing)}F(b).queue(function(){F(Q).css({width:Y,top:ab+x,marginLeft:-Y/2,visibility:"hidden",display:""});F(j).css({display:"none",visibility:"",opacity:""}).fadeIn(B.imageFadeDuration,k)})}function k(){if(G>=0){F(T).show()}if(N>=0){F(e).show()}F(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},B.captionAnimationDuration);Q.style.visibility="";F(X).css("display","none");F(s).css("display","none");if(A){clearTimeout(U);if(n){F(s).css("display","");if(P!=(h.length-1)){U=setTimeout(g,B.slideshowInterval)}else{if(B.slideshowAutoclose){U=setTimeout(M,B.slideshowInterval)}else{if(B.loop){U=setTimeout(a,B.slideshowInterval,0)}else{d()}}}}else{F(X).css("display","")}}B.allowSave?F(D).attr("href",h[P][0]).css("display",""):F(D).css("display","none")}function I(){if(n){d()}else{E()}return false}function E(){n=true;if(P!=(h.length-1)){g()}else{if(B.slideshowAutoclose&&!B.loop){U=setTimeout(M,0)}else{if(B.loop){a(0)}else{}}}return false}function d(){n=false;clearTimeout(U);F(X).css("display","");F(s).css("display","none");return false}function w(){o.onload=null;o.src=z.src=V.src=t;F([b,j,c]).stop(true);F([T,e,j,Q]).hide()}function M(){if(P>=0){d();w();P=G=N=-1;F(b).hide();F(S).stop().fadeOut(B.overlayFadeDuration,m);clearTimeout(U)}return false}})(jQuery);var SlimboxOptions=jQuery.extend({},window.SlimboxOptions||{});if(!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)){jQuery(function(a){a("a[rel^='lightbox']").slimbox(SlimboxOptions,null,function(b){return(this==b)||((this.rel.length>8)&&(this.rel==b.rel))})})};




function set_cookie(name,value) {
	expire_date = new Date();
	in_one_year = expire_date.getTime() + (365 * 24 * 60 * 60 * 1000);
	expire_date.setTime(in_one_year);
	document.cookie = name + "=" + value + "; expires=" + expire_date.toGMTString() + ";path=/;";
}

function read_cookie_value(cookie_name) {
	if(document.cookie.match(cookie_name)) {
		cookie_name_length = cookie_name.length;
		var cookie_position = document.cookie.indexOf(cookie_name);
		var start_value_reading = cookie_position + cookie_name_length + 1;
		var interim_value = document.cookie.substr(start_value_reading);
		var position_next_separator = interim_value.indexOf(";");

		if(position_next_separator != "-1") {
				var stop_value_reading = position_next_separator;
				var cookie_value = document.cookie.substr(start_value_reading,stop_value_reading);
		} else {
				var cookie_value = document.cookie.substr(start_value_reading);
		}
		return cookie_value;
	}
}



function change_body_font(span) {
	font_size = span.substr(5,7);
	new_font_size = font_size.replace("_",".");
	set_cookie("accessibility_font_size",new_font_size);
	location.reload();
}

function show_font_switcher() {
	document.write("<div class=\"middle\"><div id=\"font_switcher\">");
	document.write("<ul>");
	document.write("<li><dfn>1:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_0_95\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"kleine Schriftgr&ouml;&szlig;e\">A<\/a><\/li>");
	document.write("<li><dfn>2:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_0\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"normale Schriftgr&ouml;&szlig;e\">A<\/a><\/li>");
	document.write("<li><dfn>3:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_2\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"gro&szlig;e Schriftgr&ouml;&szlig;e\">A<\/a><\/li>");
	document.write("<\/ul>");
	document.write("<\/div><\/div>");
}

function show_font_switcher_en() {
	document.write("<div class=\"middle\"><div id=\"font_switcher\">");
	document.write("<ul>");
	document.write("<li><dfn>1:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_0_95\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"small fontsize\">A<\/a><\/li>");
	document.write("<li><dfn>2:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_0\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"medium fontsize\">A<\/a><\/li>");
	document.write("<li><dfn>3:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_2\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"big fontsize\">A<\/a><\/li>");
	document.write("<\/ul>");
	document.write("<\/div><\/div>");
}

function show_font_switcher_ru() {
	document.write("<div class=\"middle\"><div id=\"font_switcher\">");
	document.write("<ul>");
	document.write("<li><dfn>1:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_0_95\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"малый размер шрифта\">A<\/a><\/li>");
	document.write("<li><dfn>2:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_0\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"средний размер шрифта\">A<\/a><\/li>");
	document.write("<li><dfn>3:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_2\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"крупный размер шрифта\">A<\/a><\/li>");
	document.write("<\/ul>");
	document.write("<\/div><\/div>");
}

function show_font_switcher_tr() {
	document.write("<div class=\"middle\"><div id=\"font_switcher\">");
	document.write("<ul>");
	document.write("<li><dfn>1:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_0_95\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"Kücük punto\">A<\/a><\/li>");
	document.write("<li><dfn>2:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_0\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"Normal punto\">A<\/a><\/li>");
	document.write("<li><dfn>3:<\/dfn><a href=\"javascript:history.go(0)\" id=\"font_1_2\" onclick=\"change_body_font(this.id);\" onkeypress=\"this.onclick\" title=\"Büyük punto\">A<\/a><\/li>");
	document.write("<\/ul>");
	document.write("<\/div><\/div>");
}

function apply_accessibility_font() {
	cookie_value = read_cookie_value("accessibility_font_size");
	document.getElementById("wrapper").style.fontSize = cookie_value + "em";
}

function init($){
	$('html').attr('id','js');
}

function langMenue($,element){
	var $elem = $(element);
	//var $langmenue = $(element).find('.languages');
	var $langmenue = $(element).find('.languages').addClass('language_menu').removeClass('languages');
	var $actLi = $langmenue.find('li.act');
	var $actFlag = $langmenue.find('li.act img').attr('id','actFlag');
	var $langcount = $langmenue.find('li img').length;

	if(!$elem.length){
		return;
	}

	if($langcount <=1){
		$actFlag.css({'background':'none'});
	}

	$langmenue.before($actFlag);
	$actLi.remove();

	$actFlag.click(function(){
		$langmenue.slideToggle('fast');
		$(this).toggleClass('close');
	});
}


function searchAutoComplete($,element){
	var $elem = $(element);

	if(!$($elem).length){
		return;
	}

	// FAIL alert('CX: '+$('#cx').value);
	// TODO use dynamic #cx as partner id

	jQuery('#search_query_gcs')
		.focus(function () { this.select(); })
		.mouseup(function (e) { e.preventDefault(); })
		.autocomplete({
			// position: { offset: '0' },
			position: { my: 'left top', at: 'left bottom', offset: '0, 0', collision: 'none' },
			source: function (request, response) {
				jQuery.ajax({
					//
					url: ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clients1.google.com/complete/search?q=' + request.term + '&hl=en&client=partner&source=gcsc&partnerid=' + document.getElementById('cx_box').value + '&ds=cse&nocache=' + Math.random().toString(),
					dataType: 'jsonp',
					success: function (data) {
						data[1].splice(6,4);
						response(jQuery.map(data[1], function (item) {
							return {
								label: item[0],
								value: item[0]
							};
						}));
					}
				});
			},
			autoFill: true,
			minChars: 0,
			appendTo: '#search',
			select: function (event, ui) {
				jQuery(this).closest('input').val(ui.item.value);
				jQuery(this).closest('form').trigger('submit');
			}
	})
	/* This works but solves nothing for IE7
	.css('zIndex', '9999')
	.css('z-index', '9999')
	.css('border', '1px solid green');
	*/

	if( $.browser.msie && $.browser.version.substring(0, 1)==7 ){
		jQuery('#search_query_gcs').focus(function(){
			jQuery("#metainfo").css('display','none');
		}).focusout(function(){
			jQuery("#metainfo").css('display','block');
		})
	}


}

function setFieldActive(id) {
	//document.getElementById(id).style.border = "1px solid #00589C";
	document.getElementById(id).style.background = "#FFFFFF";
}

function unsetFieldActive(id) {
	//document.getElementById(id).style.border = "1px solid #FFFFFF";
	document.getElementById(id).style.background = "#F2F2F2";
}

jQuery(document).ready(function($) {
	init($);
	langMenue($,'.selectmenu');
	searchAutoComplete($,'#search_query_gcs');
});