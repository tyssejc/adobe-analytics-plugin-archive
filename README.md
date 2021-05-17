# Adobe Analytics Plugin Archive

## Introduction

Once upon a time, the core Adobe Analytics (formerly [Omniture](https://en.wikipedia.org/wiki/Omniture) SiteCatalyst, formerly [WebSideStory](https://en.wikipedia.org/wiki/WebSideStory) [HitBox](https://en.wikipedia.org/wiki/Hitbox_(web_analytics)) HBX) JavaScript tracking library could be augmented by using snippets of code called "plugins". Plugins were developed by consultants (or savvy implementation developers) and were added to a special section in the core tracking library code. (This can still be done in Adobe Launch by adding code to the Custom Tracker section of the Analytics extension configuration screen, but it's recommended that you use the official [Common Analytics Plugin](https://exchange.adobe.com/experiencecloud.details.102744.common-analytics-plugins.html) extension instead.)

Over the years, Adobe has dropped support for some of these plugins, leading to implementations that refer to plugins but for which there is no longer any documentation. This repo is an attempt to bridge these gaps.

## Archived Plugins

### setupLinkTrack
This plugin was developed by Adobe Consulting to mimic the automatic link tracking provided in WebSideStory's HBX Analytics library. As far as I can tell, it was ultimately deprecated in favor of [Activity Map](https://experienceleague.adobe.com/docs/analytics/analyze/activity-map/activity-map.html?lang=en#activity-map).

## Contributions
Got documentation or code for an old plugin that you think might be useful to others? Shoot me a PR!

## License
Plugin code used to (and still may) be under license by Adobe or Adobe Consulting. I don't know what license they would fall under now (MIT? GNU?). Adobe lawyers: if you find this to be in violation of your copyrights, please contact me so we can work something out!
