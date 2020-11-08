var featuredItem = $(".featured-item");
featuredItem.attr("class", "container featured-item");
var featuredIcon = featuredItem.attr("icon");
var featuredHeader = featuredItem.attr("header");
var featuredDescription = featuredItem.attr("description");
var featuredItemLink = featuredItem.attr("link");
var featuredItemHtmlSection =
	"<row><div class=\"col-16 align-c\">" +
	"<span class=\"featured-icon\" style=\"background:url('" + featuredIcon + "'); background-size:cover; background-position:center;\" read-only></span>" +
	"<br><br>" +
	"<span class=\"featured-header align-c\" read-only>" + featuredHeader + "</span>" +
	"<br><br><hr><br>" +
	"<span class=\"featured-description align-j\" read-only>" + featuredDescription + "</span>" +
	"</div>" +
	"</row>" +
	"<row>" +
	"<div class=\"col-16 align-r\">" +
	"<br><br>" +
	"<a type=\"button\" class=\"btn-green featured-item-link-button align-c\" href=\"" + featuredItemLink + "\" title=\"Click to know more\" bordered shadowed>MORE</a>" +
	"</div>" +
	"</row>";
featuredItem.html(featuredItemHtmlSection);