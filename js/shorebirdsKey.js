function updateKeyPanel(customAttribute){
    keyCarousel.setCard(0);
    var index =  speciesList.find('speciesImage', customAttribute);
    var rec   =  speciesList.getAt(index);
    Ext.getCmp('keyIllustration').update({
		speciesCommon: rec.get('speciesCommon'),
		speciesSize: rec.get('speciesSize'),
		speciesImage: rec.get('speciesImage')
    });
    Ext.getCmp('browseMap').update({
		speciesCommon: rec.get('speciesCommon'),
		speciesSize: rec.get('speciesSize'),
		speciesImage: rec.get('speciesImage')
    });
    Ext.getCmp('keyText').update({
		speciesCommon: rec.get('speciesCommon'),
 		speciesSize: rec.get('speciesSize'),
 		speciesTip: rec.get('speciesTip'),
		speciesHabitat: rec.get('speciesHabitat'),
		speciesInflight: rec.get('speciesInflight'),
		speciesStatus: rec.get('speciesStatus')
    });
    Ext.getCmp('keyPhoto').update({
    	speciesCommon: rec.get('speciesCommon'),
    	speciesSize: rec.get('speciesSize'),
        speciesImage: rec.get('speciesImage')
    });
}

Ext.setup({
    phoneStartupScreen: 'shorebirds_startup.png',
    phoneIcon: 'shorebirds_icon.png',
    glossOnIcon: false,
    onReady: function() {
    
/***************************************************
  * THE KEY NESTED LIST PANEL AND ASSOCIATED ITEMS *
  **************************************************/

        var keyList = new Ext.NestedList({
            fullscreen: true,
            cls: 'keyList',
            items: [{
                html: [
                	'<p><strong>Large Black or Black &amp White Bird</strong></p>',
                   	'<img src="images/groups/oystercatchers.png" />',
                   	'<img src="images/groups/avocets.png" />',
                   	'<img src="images/groups/stilts.png" />'
//                	'<p>Oystercatcher/Avocet/Stilt</p>'
                ],
                items: [{
                    html: [
                    	'<img src="images/thumbnails/sootyoystercatcher.png" align="left" />',
                    	'<p><strong>All Black</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
                    	'<p>Sooty Oystercatcher (46cm)<p>'
                    ],
                    customAttribute: 'sootyoystercatcher'
                },{
                	html: [
                    	'<img src="images/thumbnails/australianpiedoystercatcher.png" align="left" />',
                		'<p><strong>Black &amp White/Heavy Bill</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
                		'<p>Australian Pied Oystercatcher (46cm)<p>'
                	],
                    customAttribute: 'australianpiedoystercatcher'
                },{
                	html: [
                    	'<img src="images/thumbnails/redneckedavocet.png" align="left" />',
                		'<p><strong>Black &amp White/Thin Upturned Bill</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
                		'<p>Red-necked Avocet (44cm)<p>'
                	],
                    customAttribute: 'redneckedavocet'
                },{
            		html: [
                    	'<img src="images/thumbnails/blackwingedstilt.png" align="left" />',
            			'<p><strong>Black &amp White/Thin Straight Bill</strong></p>',
            			'<p><strong>Breast White</strong></p>',
            			'<p>Black-winged Stilt (37cm)<p>'
            		],
                    customAttribute: 'blackwingedstilt'
            	},{
            		html: [
                    	'<img src="images/thumbnails/bandedstilt.png" align="left" />',
            			'<p><strong>Black &amp White/Thin Straight Bill</strong></p>',
            			'<p><strong>Brown Breast Band</strong></p>',
            			'<p>Banded Stilt (39cm)<p>'
            		],
                    customAttribute: 'bandedstilt'
                }]
            },{
                html: [
                	'<p><strong>Bill Very Long (&gt 1&frac12 Head)</strong></p>',
                   	'<img src="images/groups/curlews.png" />',
                   	'<img src="images/groups/godwits.png" />',
                   	'<img src="images/groups/dowitchers.png" />',
                   	'<img src="images/groups/snipe.png" />'
//            		'<p>Curlew/Godwit/Dowitcher/Snipe<p>'
                ],
                items: [{
            		html: [
                    	'<img src="images/thumbnails/littlecurlew.png" align="left" />',
            			'<p><strong>Bill Downturned - Medium</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Little Curlew (29cm)<p>'
            		],
                    customAttribute: 'littlecurlew'
            	},{
            		html: [
                    	'<img src="images/thumbnails/whimbrel.png" align="left" />',
            			'<p><strong>Bill Downturned - Long</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Whimbrel (42cm)<p>'
            		],
                    customAttribute: 'whimbrel'
            	},{
            		html: [
                    	'<img src="images/thumbnails/easterncurlew.png" align="left" />',
            			'<p><strong>Bill Downturned - Very Long</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Eastern Curlew (63cm)<p>'
            		],
                    customAttribute: 'easterncurlew'
                },{
                	html: [
                    	'<img src="images/thumbnails/bartailedgodwit.png" align="left" />',
                		'<p><strong>Bill Slightly Upturned</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
                		'<p>Bar-tailed Godwit (39cm)</p>'
                	],
                    customAttribute: 'bartailedgodwit'
                },{
            		html: [
                    	'<img src="images/thumbnails/blacktailedgodwit.png" align="left" />',
            			'<p><strong>Bill Straight/Plain Plumage</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Black-tailed Godwit (39cm)<p>'
            		],
                    customAttribute: 'blacktailedgodwit'
            	},{
            		html: [
                    	'<img src="images/thumbnails/asiandowitcher.png" align="left" />',
            			'<p><strong>Bill Straight/Streaked Plumage</strong></p>',
            			'<p><strong>Long Legs</strong></p>',
            			'<p>Asian Dowitcher (34cm)<p>'
            		],
                    customAttribute: 'asiandowitcher'
            	},{
            		html: [
                    	'<img src="images/thumbnails/lathamssnipe.png" align="left" />',
            			'<p><strong>Bill Straight/Streaked Plumage</strong></p>',
            			'<p><strong>Short Legs</strong></p>',
            			'<p>Latham\'s Snipe (27cm)<p>'
            		],
                    customAttribute: 'lathamssnipe'
            	},{
            		html: [
                    	'<img src="images/thumbnails/australianpaintedsnipe.png" align="left" />',
            			'<p><strong>Bill Straight/Dark Head</strong></p>',
            			'<p><strong>White Collar &amp Chest</strong></p>',
            			'<p>Australian Painted Snipe (27cm)<p>'
            		],
                    customAttribute: 'australianpaintedsnipe'
                }]
            },{
                html: [
                	'<p><strong>Bill Long (1 - &frac12 Head)</strong></p>',
                   	'<img src="images/groups/largesandpipers.png" />',
                   	'<img src="images/groups/stonecurlews.png" />',
                   	'<img src="images/groups/shanks.png" />',
                   	'<img src="images/groups/tattlers.png" />'
//            		'<p>Sandpiper/Shank/Tattler<p>'
            	],
                items: [{
                	html: [
                    	'<img src="images/thumbnails/curlewsandpiper.png" align="left" />',
                		'<p><strong>Downturned Bill</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
                		'<p>Curlew Sandpiper (20cm)</p>'
                	],
                    customAttribute: 'curlewsandpiper'
                },{
            		html: [
                    	'<img src="images/thumbnails/tereksandpiper.png" align="left" />',
            			'<p><strong>Upturned Bill</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Terek Sandpiper (23cm)<p>'
            		],
                    customAttribute: 'tereksandpiper'
            	},{
            		html: [
                    	'<img src="images/thumbnails/commongreenshank.png" align="left" />',
            			'<p><strong>Slightly Upturned Bill</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Common Greenshank (33cm)<p>'
            		],
                    customAttribute: 'commongreenshank'
                },{
            		html: [
                    	'<img src="images/thumbnails/broadbilledsandpiper.png" align="left" />',
            			'<p><strong>Drooped Tip of Bill</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Broad-billed Sandpiper (17cm)<p>'
            		],
                    customAttribute: 'broadbilledsandpiper'
            	},{
            		html: [
                    	'<img src="images/thumbnails/marshsandpiper.png" align="left" />',
            			'<p><strong>Straight Bill - Needle Thin</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Marsh Sandpiper (24cm)<p>'
            		],
                    customAttribute: 'marshsandpiper'
            	},{
            		html: [
                    	'<img src="images/thumbnails/commonredshank.png" align="left" />',
            			'<p><strong>Straight Bill - Red/Orange Legs</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Common Redshank (28cm)<p>'
            		],
                    customAttribute: 'commonredshank'
            	},{
            		html: [
                    	'<img src="images/thumbnails/greatknot.png" align="left" />',
            			'<p><strong>Straight Bill - Streaked Plumage</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Great Knot (27cm)<p>'
            		],
                    customAttribute: 'greatknot'
            	},{
            		html: [
                    	'<img src="images/thumbnails/greytailedtattler.png" align="left" />',
            			'<p><strong>Straight Bill - Plain Grey Plumage</strong></p>',
            			'<p><strong>Call an "uplsurred whistle"</strong></p>',
            			'<p>Grey-tailed Tattler (25cm)<p>'
            		],
                    customAttribute: 'greytailedtattler'
            	},{
            		html: [
                    	'<img src="images/thumbnails/wanderingtattler.png" align="left" />',
            			'<p><strong>Straight Bill - Dark Grey Plumage</strong></p>',
            			'<p><strong>Call a "rippling trill"</strong></p>',
            			'<p>Wandering Tattler (25cm)<p>'
            		],
                    customAttribute: 'wanderingtattler'
            	},{
            		html: [
                    	'<img src="images/thumbnails/beachstonecurlew.png" align="left" />',
            			'<p><strong>Massive Straight Bill</strong></p>',
            			'<p><strong>Long Dark Wing Bar</strong></p>',
            			'<p>Beach Stone-curlew (55cm)<p>'
            		],
                    customAttribute: 'beachstonecurlew'
                }]
            },{
                html: [
                	'<p><strong>Bill Medium/Tapered (&frac34 - 1 Head)</strong></p>',
                   	'<img src="images/groups/smallsandpipers.png" />'
//            		'<p>Small Sandpipers<p>'
            	],
                items: [{
                	html: [
                    	'<img src="images/thumbnails/sanderling.png" align="left" />',
                		'<p><strong>Black Legs</strong></p>',
                		'<p><strong>Pearly/Grey Above - White Below</strong></p>',
                		'<p>Sanderling (21cm)</p>'
                	],
                    customAttribute: 'sanderling'
                },{
            		html: [
                    	'<img src="images/thumbnails/redneckedstint.png" align="left" />',
            			'<p><strong>Black Legs</strong></p>',
            			'<p><strong>Grey/Brown Above - White Below</strong></p>',
            			'<p>Red-necked Stint (14cm)<p>'
            		],
                    customAttribute: 'redneckedstint'
            	},{
            		html: [
                    	'<img src="images/thumbnails/longtoedstint.png" align="left" />',
            			'<p><strong>Pale Legs</strong></p>',
            			'<p><strong>Brown Streaked/Mottled</strong></p>',
            			'<p>Long-toed Stint (14cm)<p>'
            		],
                    customAttribute: 'longtoedstint'
            	},{
            		html: [
                    	'<img src="images/thumbnails/sharptailedsandpiper.png" align="left" />',
            			'<p><strong>Pale Legs</strong></p>',
            			'<p><strong>Boldy Brown Streaked/Mottled</strong></p>',
            			'<p>Sharp-tailed Sandpiper (20cm)<p>'
            		],
                    customAttribute: 'sharptailedsandpiper'
            	},{
            		html: [
                    	'<img src="images/thumbnails/woodsandpiper.png" align="left" />',
            			'<p><strong>Pale Legs</strong></p>',
            			'<p><strong>White Spotted Upperparts</strong></p>',
            			'<p>Wood Sandpiper (21cm)<p>'
            		],
                    customAttribute: 'woodsandpiper'
                },{
            		html: [
                    	'<img src="images/thumbnails/pectoralsandpiper.png" align="left" />',
            			'<p><strong>Pale Legs</strong></p>',
            			'<p><strong>Streaky Breast Ends Abruptly</strong></p>',
            			'<p>Pectoral Sandpiper (21cm)<p>'
            		],
                    customAttribute: 'pectoralsandpiper'
            	},{
            		html: [
                    	'<img src="images/thumbnails/commonsandpiper.png" align="left" />',
            			'<p><strong>Pale Legs</strong></p>',
            			'<p><strong>White in Front of Folded Wings</strong></p>',
            			'<p>Common Sandpiper (20cm)<p>'
            		],
                    customAttribute: 'commonsandpiper'
            	},{
            		html: [
                    	'<img src="images/thumbnails/redknot.png" align="left" />',
            			'<p><strong>Pale Legs</strong></p>',
            			'<p><strong>Chevron Marks on Flanks/Breast</strong></p>',
            			'<p>Red Knot (24cm)<p>'
            		],
                    customAttribute: 'redknot'
                }]
            },{
                html: [
                	'<p><strong>Bill Short/Heavy (&frac12 - &frac34 Head)</strong></p>',
                   	'<img src="images/groups/turnstones.png" />',
                   	'<img src="images/groups/largeplovers.png" />',
                   	'<img src="images/groups/stonecurlews.png" />',
                   	'<img src="images/groups/lapwings.png" />',
                   	'<img src="images/groups/jacana.png" />',
                   	'<img src="images/groups/pratincoles.png" />'
//            		'<p>Turnstone/Plover/Lapwing/Jacana/Pratincole<p>'
            	],
                items: [{
                	html: [
                    	'<img src="images/thumbnails/ruddyturnstone.png" align="left" />',
                		'<p><strong>Orange Legs</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
                		'<p>Ruddy Turnstone (23cm)</p>'
                	],
                    customAttribute: 'ruddyturnstone'
            	},{
            		html: [
                    	'<img src="images/thumbnails/orientalpratincole.png" align="left" />',
            			'<p><strong>No Breast Band - Olive Plumage</strong></p>',
            			'<p><strong>Black Throat Line</strong></p>',
            			'<p>Oriental Pratincole (24cm)<p>'
            		],
                    customAttribute: 'orientalpratincole'
            	},{
            		html: [
                    	'<img src="images/thumbnails/australianpratincole.png" align="left" />',
            			'<p><strong>No Breast Band - Sandy Plumage</strong></p>',
            			'<p><strong>Chestnut Belly</strong></p>',
            			'<p>Australian Pratincole (21cm)<p>'
            		],
                    customAttribute: 'australianpratincole'
            	},{
            		html: [
                    	'<img src="images/thumbnails/pacificgoldenplover.png" align="left" />',
            			'<p><strong>No Breast Band - Brown Plumage</strong></p>',
            			'<p><strong>with Gold Flecks</strong></p>',
            			'<p>Pacific Golden Plover (25cm)<p>'
            		],
                    customAttribute: 'pacificgoldenplover'
            	},{
            		html: [
                    	'<img src="images/thumbnails/greyplover.png" align="left" />',
            			'<p><strong>No Breast Band - Grey Plumage</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Grey Plover (29cm)<p>'
            		],
                    customAttribute: 'greyplover'
            	},{
            		html: [
                    	'<img src="images/thumbnails/bushstonecurlew.png" align="left" />',
            			'<p><strong>No Breast Band - Streaked Body</strong></p>',
            			'<p><strong>Large Eyes</strong></p>',
            			'<p>Bush Stone-curlew (55cm)<p>'
            		],
                    customAttribute: 'bushstonecurlew'
                },{
            		html: [
                    	'<img src="images/thumbnails/combcrestedjacana.png" align="left" />',
            			'<p><strong>No Breast Band - Red Comb</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Comb-crested Jacana (21cm)<p>'
            		],
                    customAttribute: 'combcrestedjacana'
                },{
            		html: [
                    	'<img src="images/thumbnails/maskedlapwing.png" align="left" />',
            			'<p><strong>No Breast Band - Yellow Wattles</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Masked Lapwing (34cm)<p>'
            		],
                    customAttribute: 'maskedlapwing'
                },{
            		html: [
                    	'<img src="images/thumbnails/bandedlapwing.png" align="left" />',
            			'<p><strong>Single Breast Band - Black</strong></p>',
            			'<p><strong>Small Red Wattle in Front of Eyes</strong></p>',
            			'<p>Banded Lapwing (27cm)<p>'
            		],
                    customAttribute: 'bandedlapwing'
            	},{
            		html: [
                    	'<img src="images/thumbnails/greatersandplover.png" align="left" />',
            			'<p><strong>Single Breast Band - Brown</strong></p>',
            			'<p><strong>Compact Horizontal Posture</strong></p>',
            			'<p>Greater Sand Plover (21cm)<p>'
            		],
                    customAttribute: 'greatersandplover'
            	},{
            		html: [
                    	'<img src="images/thumbnails/orientalplover.png" align="left" />',
            			'<p><strong>Single Breast Band - Brown</strong></p>',
            			'<p><strong>Slim Upright Posture</strong></p>',
            			'<p>Oriental Plover (25cm)<p>'
            		],
                    customAttribute: 'orientalplover'
                }]
            },{
                html: [
                	'<p><strong>Bill Very Short/Heavy (&lt &frac12 Head)</strong></p>',
                   	'<img src="images/groups/smallplovers.png" />'
//            		'<p>Small Plovers<p>'
            	],
                items: [{
            		html: [
                    	'<img src="images/thumbnails/redcappedplover.png" align="left" />',
            			'<p><strong>No Breast Band/Rufous Cap</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Red-capped Plover (15cm)<p>'
            		],
                    customAttribute: 'redcappedplover'
            	},{
            		html: [
                    	'<img src="images/thumbnails/hoodedplover.png" align="left" />',
            			'<p><strong>No Breast Band/Black Hood</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Hooded Plover (21cm)<p>'
            		],
                    customAttribute: 'hoodedplover'
                },{
            		html: [
                    	'<img src="images/thumbnails/lessersandplover.png" align="left" />',
            			'<p><strong>Single Breast Band - Brown</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
            			'<p>Lesser Sand Plover (19cm)<p>'
            		],
                    customAttribute: 'lessersandplover'
            	},{
            		html: [
                    	'<img src="images/thumbnails/blackfronteddotterel.png" align="left" />',
            			'<p><strong>Single Breast Band - Black</strong></p>',
            			'<p><strong>Brown Cap</strong></p>',
            			'<p>Black-fronted Dotterel (17cm)<p>'
            		],
                    customAttribute: 'blackfronteddotterel'
            	},{
            		html: [
                    	'<img src="images/thumbnails/redkneeddotterel.png" align="left" />',
            			'<p><strong>Single Breast Band - Black</strong></p>',
            			'<p><strong>Black Cap</strong></p>',
            			'<p>Red-kneed Dotterel (18cm)<p>'
            		],
                    customAttribute: 'redkneeddotterel'
	            },{
	            	html: [
	                	'<img src="images/thumbnails/doublebandedplover.png" align="left" />',
	            		'<p><strong>Double Breast Band</strong></p>',
            			'<p><strong>&nbsp</strong></p>',
	            		'<p>Double-banded Plover (19cm)</p>'
	            	],
	                customAttribute: 'doublebandedplover'
                }]
            }]     
        });
        
        keyList.on('listchange', function(list, item) {
            if (!item.items && item.customAttribute) {
                keyMain.setCard(1);
                updateKeyPanel(item.customAttribute);
            }            
        });        

/************************************************
  * THE SPECIES DATA PANEL AND ASSOCIATED ITEMS *
  ***********************************************/
  
// First, define the carousel

		keyCarousel = new Ext.Carousel({
			ui: 'dark',
			defaults: {
				cls: 'card'
			},
			items: [{
		       	id: 'keyIllustration',
		       	scroll: 'vertical',
		       	tpl: [
		      		'<tpl for=".">',
		      			'<div class="clsDetail">',
		      				'<p style="margin: 5px;"><strong>{speciesCommon} ({speciesSize}cm)</strong></p>',
		      				'<img src="images/illustrations/{speciesImage}.jpg" width="100%" />',
		      				'<p><italic>Size (cm) is length from bill tip to end of tail</italic></p>',
		      			'</div>',
		      		'</tpl>'
		      	],
			},{
		       	id: 'browseMap',
		       	scroll: 'vertical',
		       	tpl: [
		      		'<tpl for=".">',
		      			'<div class="clsDetail">',
		      				'<p><strong>{speciesCommon}</strong></p>',
		      				'<img src="images/maps/{speciesImage}.jpg" width="100%" />',
		      			'</div>',
		      		'</tpl>'
		      	],
			},{
		       	id: 'keyText',
		       	scroll: 'vertical',
		       	tpl: [
		      		'<tpl for=".">',
		      			'<div class="clsText">',
		      				'<p style="text-align: center;"><strong>{speciesCommon}</strong></p>',
							'<p><strong>Status</strong> - {speciesStatus}</p><br />',
							'<p><strong>Habitat</strong> - {speciesHabitat}</p><br />',
			      			'<p>{speciesTip}</p><br />',
							'<p><strong>In Flight</strong> - {speciesInflight}</p>',
		      			'</div>',
		      		'</tpl>'
		      	],
			},{
		       	id: 'keyPhoto',
		       	scroll: 'vertical',
		       	tpl: [
		      		'<tpl for=".">',
		      			'<div class="clsDetail">',
		      				'<p style="margin: 5px;"><strong>{speciesCommon}</strong></p>',
		      				'<img src="images/photos/{speciesImage}.jpg" width="100%" />',
		      			'</div>',
		      		'</tpl>'
		      	],
			}]
		});

// Second, define the detail panel and toolbar

		var keyDetail = new Ext.Panel({
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            },
			items: [keyCarousel],
			dockedItems: [{
				xtype: 'toolbar',
				cls: 'keyToolbar',
				dock: 'top',
				ui: 'light',
				items: [{
					xtype: 'button',
					text: 'Back',
					ui: 'back',
					handler: function(){
					    keyMain.setCard(0);
					}
				}]
			}]
		});
        
/***********************
  * THE MAIN CONTAINER *
  ***********************/
  
		var keyMain = new Ext.Container({
			fullscreen: true,
			layout: 'card',
			items:[keyList, keyDetail]
		}).show();
	
    }

});
