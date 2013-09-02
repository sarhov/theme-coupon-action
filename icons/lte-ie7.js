/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomico\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-edit' : '&#xe000;',
			'icon-glass' : '&#xe001;',
			'icon-music' : '&#xe002;',
			'icon-search' : '&#xe003;',
			'icon-envelope' : '&#xe004;',
			'icon-heart' : '&#xe005;',
			'icon-star' : '&#xe006;',
			'icon-star-empty' : '&#xe007;',
			'icon-user' : '&#xe008;',
			'icon-film' : '&#xe009;',
			'icon-th-large' : '&#xe00a;',
			'icon-th' : '&#xe00b;',
			'icon-th-list' : '&#xe00c;',
			'icon-ok' : '&#xe00d;',
			'icon-remove' : '&#xe00e;',
			'icon-zoom-in' : '&#xe00f;',
			'icon-zoom-out' : '&#xe010;',
			'icon-off' : '&#xe011;',
			'icon-signal' : '&#xe012;',
			'icon-cog' : '&#xe013;',
			'icon-trash' : '&#xe014;',
			'icon-home' : '&#xe015;',
			'icon-file' : '&#xe016;',
			'icon-time' : '&#xe017;',
			'icon-road' : '&#xe018;',
			'icon-download-alt' : '&#xe019;',
			'icon-text-height' : '&#xe01a;',
			'icon-female' : '&#xe01b;',
			'icon-male' : '&#xe01c;',
			'icon-gittip' : '&#xe01d;',
			'icon-sun' : '&#xe01e;',
			'icon-moon' : '&#xe01f;',
			'icon-bug' : '&#xe020;',
			'icon-vk' : '&#xe021;',
			'icon-weibo' : '&#xe022;',
			'icon-renren' : '&#xe023;',
			'icon-archive' : '&#xe024;',
			'icon-youtube' : '&#xe025;',
			'icon-xing' : '&#xe026;',
			'icon-xing-sign' : '&#xe027;',
			'icon-youtube-play' : '&#xe028;',
			'icon-dropbox' : '&#xe029;',
			'icon-instagram' : '&#xe02a;',
			'icon-flickr' : '&#xe02b;',
			'icon-adn' : '&#xe02c;',
			'icon-bitbucket' : '&#xe02d;',
			'icon-bitbucket-sign' : '&#xe02e;',
			'icon-tumblr' : '&#xe02f;',
			'icon-tumblr-sign' : '&#xe030;',
			'icon-long-arrow-down' : '&#xe031;',
			'icon-long-arrow-left' : '&#xe032;',
			'icon-apple' : '&#xe033;',
			'icon-android' : '&#xe034;',
			'icon-long-arrow-up' : '&#xe035;',
			'icon-long-arrow-right' : '&#xe036;',
			'icon-windows' : '&#xe037;',
			'icon-linux' : '&#xe038;',
			'icon-dribbble' : '&#xe039;',
			'icon-skype' : '&#xe03a;',
			'icon-foursquare' : '&#xe03b;',
			'icon-trello' : '&#xe03c;',
			'icon-youtube-sign' : '&#xe03d;',
			'icon-thumbs-down' : '&#xe03e;',
			'icon-thumbs-up' : '&#xe03f;',
			'icon-sort-by-order-alt' : '&#xe040;',
			'icon-sort-by-order' : '&#xe041;',
			'icon-sort-by-attributes-alt' : '&#xe042;',
			'icon-sort-by-attributes' : '&#xe043;',
			'icon-sort-by-alphabet-alt' : '&#xe044;',
			'icon-sort-by-alphabet' : '&#xe045;',
			'icon-file-text' : '&#xe046;',
			'icon-file-2' : '&#xe047;',
			'icon-bitcoin' : '&#xe048;',
			'icon-won' : '&#xe049;',
			'icon-renminbi' : '&#xe04a;',
			'icon-yen' : '&#xe04b;',
			'icon-rupee' : '&#xe04c;',
			'icon-dollar' : '&#xe04d;',
			'icon-gbp' : '&#xe04e;',
			'icon-euro' : '&#xe04f;',
			'icon-expand' : '&#xe050;',
			'icon-stackexchange' : '&#xe051;',
			'icon-collapse-top' : '&#xe052;',
			'icon-collapse' : '&#xe053;',
			'icon-compass' : '&#xe054;',
			'icon-share-sign' : '&#xe055;',
			'icon-external-link-sign' : '&#xe056;',
			'icon-shield' : '&#xe057;',
			'icon-calendar-empty' : '&#xe058;',
			'icon-fire-extinguisher' : '&#xe059;',
			'icon-rocket' : '&#xe05a;',
			'icon-maxcdn' : '&#xe05b;',
			'icon-chevron-sign-left' : '&#xe05c;',
			'icon-chevron-sign-right' : '&#xe05d;',
			'icon-chevron-sign-down' : '&#xe05e;',
			'icon-html5' : '&#xe05f;',
			'icon-css3' : '&#xe060;',
			'icon-anchor' : '&#xe061;',
			'icon-unlock-alt' : '&#xe062;',
			'icon-bullseye' : '&#xe063;',
			'icon-ellipsis-horizontal' : '&#xe064;',
			'icon-ellipsis-vertical' : '&#xe065;',
			'icon-rss-sign' : '&#xe066;',
			'icon-play-sign' : '&#xe067;',
			'icon-ticket' : '&#xe068;',
			'icon-minus-sign-alt' : '&#xe069;',
			'icon-check-minus' : '&#xe06a;',
			'icon-level-up' : '&#xe06b;',
			'icon-level-down' : '&#xe06c;',
			'icon-check-sign' : '&#xe06d;',
			'icon-edit-sign' : '&#xe06e;',
			'icon-microphone-off' : '&#xe06f;',
			'icon-microphone' : '&#xe070;',
			'icon-puzzle' : '&#xe071;',
			'icon-eraser' : '&#xe072;',
			'icon-subscript' : '&#xe073;',
			'icon-superscript' : '&#xe074;',
			'icon-exclamation' : '&#xe075;',
			'icon-question' : '&#xe076;',
			'icon-unlink' : '&#xe077;',
			'icon-info' : '&#xe078;',
			'icon-code-fork' : '&#xe079;',
			'icon-crop' : '&#xe07a;',
			'icon-location-arrow' : '&#xe07b;',
			'icon-star-half-full' : '&#xe07c;',
			'icon-reply-all' : '&#xe07d;',
			'icon-code' : '&#xe07e;',
			'icon-terminal' : '&#xe07f;',
			'icon-flag-checkered' : '&#xe080;',
			'icon-chevron-sign-up' : '&#xe081;',
			'icon-flag-alt' : '&#xe082;',
			'icon-keyboard' : '&#xe083;',
			'icon-gamepad' : '&#xe084;',
			'icon-meh' : '&#xe085;',
			'icon-frown' : '&#xe086;',
			'icon-smile' : '&#xe087;',
			'icon-collapse-alt' : '&#xe088;',
			'icon-beer' : '&#xe089;',
			'icon-h-sign' : '&#xe08a;',
			'icon-plus-sign' : '&#xe08b;',
			'icon-double-angle-left' : '&#xe08c;',
			'icon-double-angle-right' : '&#xe08d;',
			'icon-double-angle-down' : '&#xe08e;',
			'icon-angle-left' : '&#xe08f;',
			'icon-double-angle-up' : '&#xe090;',
			'icon-angle-up' : '&#xe091;',
			'icon-angle-right' : '&#xe092;',
			'icon-angle-down' : '&#xe093;',
			'icon-desktop' : '&#xe094;',
			'icon-laptop' : '&#xe095;',
			'icon-mobile' : '&#xe096;',
			'icon-tablet' : '&#xe097;',
			'icon-circle-blank' : '&#xe098;',
			'icon-quote-left' : '&#xe099;',
			'icon-quote-right' : '&#xe09a;',
			'icon-spinner' : '&#xe09b;',
			'icon-circle' : '&#xe09c;',
			'icon-reply' : '&#xe09d;',
			'icon-folder-close-alt' : '&#xe09e;',
			'icon-folder-open-alt' : '&#xe09f;',
			'icon-expand-alt' : '&#xe0a0;',
			'icon-github-alt' : '&#xe0a1;',
			'icon-fighter-jet' : '&#xe0a2;',
			'icon-medkit' : '&#xe0a3;',
			'icon-ambulance' : '&#xe0a4;',
			'icon-hospital' : '&#xe0a5;',
			'icon-building' : '&#xe0a6;',
			'icon-file-alt' : '&#xe0a7;',
			'icon-food' : '&#xe0a8;',
			'icon-coffee' : '&#xe0a9;',
			'icon-bell-alt' : '&#xe0aa;',
			'icon-suitcase' : '&#xe0ab;',
			'icon-stethoscope' : '&#xe0ac;',
			'icon-user-md' : '&#xe0ad;',
			'icon-cloud-upload' : '&#xe0ae;',
			'icon-cloud-download' : '&#xe0af;',
			'icon-exchange' : '&#xe0b0;',
			'icon-lightbulb' : '&#xe0b1;',
			'icon-paste' : '&#xe0b2;',
			'icon-umbrella' : '&#xe0b3;',
			'icon-sitemap' : '&#xe0b4;',
			'icon-bolt' : '&#xe0b5;',
			'icon-comments-alt' : '&#xe0b6;',
			'icon-comment-alt' : '&#xe0b7;',
			'icon-random' : '&#xe0b8;',
			'icon-bar-chart' : '&#xe0b9;',
			'icon-circle-arrow-up' : '&#xe0ba;',
			'icon-question-sign' : '&#xe0bb;',
			'icon-pushpin' : '&#xe0bc;',
			'icon-dashboard' : '&#xe0bd;',
			'icon-legal' : '&#xe0be;',
			'icon-undo' : '&#xe0bf;',
			'icon-download' : '&#xe0c0;',
			'icon-fast-forward' : '&#xe0c1;',
			'icon-exclamation-sign' : '&#xe0c2;',
			'icon-cogs' : '&#xe0c3;',
			'icon-comments' : '&#xe0c4;',
			'icon-thumbs-up-2' : '&#xe0c5;',
			'icon-thumbs-down-2' : '&#xe0c6;',
			'icon-refresh' : '&#xe0c7;',
			'icon-plus-sign-2' : '&#xe0c8;',
			'icon-eye-close' : '&#xe0c9;',
			'icon-heart-empty' : '&#xe0ca;',
			'icon-save' : '&#xe0cb;',
			'icon-hdd' : '&#xe0cc;',
			'icon-bullhorn' : '&#xe0cd;',
			'icon-sign-blank' : '&#xe0ce;',
			'icon-reorder' : '&#xe0cf;',
			'icon-bell' : '&#xe0d0;',
			'icon-certificate' : '&#xe0d1;',
			'icon-list-ul' : '&#xe0d2;',
			'icon-list-ol' : '&#xe0d3;',
			'icon-hand-right' : '&#xe0d4;',
			'icon-hand-left' : '&#xe0d5;',
			'icon-strikethrough' : '&#xe0d6;',
			'icon-underline' : '&#xe0d7;',
			'icon-hand-up' : '&#xe0d8;',
			'icon-hand-down' : '&#xe0d9;',
			'icon-table' : '&#xe0da;',
			'icon-magic' : '&#xe0db;',
			'icon-circle-arrow-left' : '&#xe0dc;',
			'icon-circle-arrow-right' : '&#xe0dd;',
			'icon-truck' : '&#xe0de;',
			'icon-pinterest' : '&#xe0df;',
			'icon-pinterest-sign' : '&#xe0e0;',
			'icon-circle-arrow-down' : '&#xe0e1;',
			'icon-globe' : '&#xe0e2;',
			'icon-google-plus-sign' : '&#xe0e3;',
			'icon-google-plus' : '&#xe0e4;',
			'icon-wrench' : '&#xe0e5;',
			'icon-tasks' : '&#xe0e6;',
			'icon-money' : '&#xe0e7;',
			'icon-caret-down' : '&#xe0e8;',
			'icon-filter' : '&#xe0e9;',
			'icon-briefcase' : '&#xe0ea;',
			'icon-caret-left' : '&#xe0eb;',
			'icon-caret-up' : '&#xe0ec;',
			'icon-fullscreen' : '&#xe0ed;',
			'icon-group' : '&#xe0ee;',
			'icon-caret-right' : '&#xe0ef;',
			'icon-columns' : '&#xe0f0;',
			'icon-link' : '&#xe0f1;',
			'icon-cloud' : '&#xe0f2;',
			'icon-sort' : '&#xe0f3;',
			'icon-sort-down' : '&#xe0f4;',
			'icon-beaker' : '&#xe0f5;',
			'icon-sort-up' : '&#xe0f6;',
			'icon-cut' : '&#xe0f7;',
			'icon-copy' : '&#xe0f8;',
			'icon-linkedin' : '&#xe0f9;',
			'icon-paper-clip' : '&#xe0fa;',
			'icon-envelope-alt' : '&#xe0fb;',
			'icon-rss' : '&#xe0fc;',
			'icon-credit' : '&#xe0fd;',
			'icon-unlock' : '&#xe0fe;',
			'icon-facebook-sign' : '&#xe0ff;',
			'icon-camera-retro' : '&#xe100;',
			'icon-key' : '&#xe101;',
			'icon-twitter-sign' : '&#xe102;',
			'icon-github' : '&#xe103;',
			'icon-facebook' : '&#xe104;',
			'icon-twitter' : '&#xe105;',
			'icon-resize-horizontal' : '&#xe106;',
			'icon-resize-vertical' : '&#xe107;',
			'icon-phone-sign' : '&#xe108;',
			'icon-bookmark-empty' : '&#xe109;',
			'icon-folder-open' : '&#xe10a;',
			'icon-folder-close' : '&#xe10b;',
			'icon-check-empty' : '&#xe10c;',
			'icon-shopping-cart' : '&#xe10d;',
			'icon-retweet' : '&#xe10e;',
			'icon-lemon' : '&#xe10f;',
			'icon-phone' : '&#xe110;',
			'icon-upload-alt' : '&#xe111;',
			'icon-github-sign' : '&#xe112;',
			'icon-trophy' : '&#xe113;',
			'icon-signin' : '&#xe114;',
			'icon-external-link' : '&#xe115;',
			'icon-signout' : '&#xe116;',
			'icon-linkedin-sign' : '&#xe117;',
			'icon-star-half' : '&#xe118;',
			'icon-upload' : '&#xe119;',
			'icon-inbox' : '&#xe11a;',
			'icon-play-circle' : '&#xe11b;',
			'icon-repeat' : '&#xe11c;',
			'icon-align-justify' : '&#xe11d;',
			'icon-chevron-right' : '&#xe11e;',
			'icon-eye-open' : '&#xe11f;',
			'icon-fire' : '&#xe120;',
			'icon-leaf' : '&#xe121;',
			'icon-gift' : '&#xe122;',
			'icon-text-width' : '&#xe123;',
			'icon-align-left' : '&#xe124;',
			'icon-align-center' : '&#xe125;',
			'icon-align-right' : '&#xe126;',
			'icon-chevron-left' : '&#xe127;',
			'icon-eject' : '&#xe128;',
			'icon-step-forward' : '&#xe129;',
			'icon-list' : '&#xe12a;',
			'icon-list-alt' : '&#xe12b;',
			'icon-lock' : '&#xe12c;',
			'icon-flag' : '&#xe12d;',
			'icon-headphones' : '&#xe12e;',
			'icon-picture' : '&#xe12f;',
			'icon-ok-sign' : '&#xe130;',
			'icon-facetime-video' : '&#xe131;',
			'icon-indent-right' : '&#xe132;',
			'icon-indent-left' : '&#xe133;',
			'icon-minus-sign' : '&#xe134;',
			'icon-remove-sign' : '&#xe135;',
			'icon-plane' : '&#xe136;',
			'icon-warning-sign' : '&#xe137;',
			'icon-calendar' : '&#xe138;',
			'icon-comment' : '&#xe139;',
			'icon-magnet' : '&#xe13a;',
			'icon-chevron-up' : '&#xe13b;',
			'icon-chevron-down' : '&#xe13c;',
			'icon-ok-circle' : '&#xe13d;',
			'icon-tint' : '&#xe13e;',
			'icon-volume-up' : '&#xe13f;',
			'icon-qrcode' : '&#xe140;',
			'icon-adjust' : '&#xe141;',
			'icon-screenshot' : '&#xe142;',
			'icon-remove-circle' : '&#xe143;',
			'icon-map-marker' : '&#xe144;',
			'icon-volume-down' : '&#xe145;',
			'icon-volume-off' : '&#xe146;',
			'icon-pencil' : '&#xe147;',
			'icon-info-sign' : '&#xe148;',
			'icon-barcode' : '&#xe149;',
			'icon-ban-circle' : '&#xe14a;',
			'icon-forward' : '&#xe14b;',
			'icon-asterisk' : '&#xe14c;',
			'icon-minus' : '&#xe14d;',
			'icon-plus' : '&#xe14e;',
			'icon-resize-small' : '&#xe14f;',
			'icon-resize-full' : '&#xe150;',
			'icon-share-alt' : '&#xe151;',
			'icon-arrow-down' : '&#xe152;',
			'icon-arrow-up' : '&#xe153;',
			'icon-arrow-right' : '&#xe154;',
			'icon-arrow-left' : '&#xe155;',
			'icon-share' : '&#xe156;',
			'icon-check' : '&#xe157;',
			'icon-move' : '&#xe158;',
			'icon-step-backward' : '&#xe159;',
			'icon-fast-backward' : '&#xe15a;',
			'icon-backward' : '&#xe15b;',
			'icon-play' : '&#xe15c;',
			'icon-pause' : '&#xe15d;',
			'icon-stop' : '&#xe15e;',
			'icon-italic' : '&#xe15f;',
			'icon-bold' : '&#xe160;',
			'icon-font' : '&#xe161;',
			'icon-camera' : '&#xe162;',
			'icon-print' : '&#xe163;',
			'icon-bookmark' : '&#xe164;',
			'icon-book' : '&#xe165;',
			'icon-tags' : '&#xe166;',
			'icon-tag' : '&#xe167;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};