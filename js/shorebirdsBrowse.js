Ext.override(Ext.List, {
   setGrouped: function(grouped){
       this.grouped = !!grouped;
       this.tpl = this.grouped ? this.groupTpl : this.itemTpl;
       if(this.rendered){
           if(!this.grouped){
               this.el.addClass('x-list-flat');
               if (this.indexBar) {
                   this.indexBar.hide();
               }
           }else{
               this.el.removeClass('x-list-flat');
               if(this.indexBar){
                   this.indexBar.show();
               }
           }
           this.refresh();
       }
   }
});

var browseCarousel;
var browseIndex;

function updateBrowsePanel(browseIndex){
    browseCarousel.setCard(0);
    var rec =  speciesList.getAt(browseIndex);
    Ext.getCmp('browseIllustration').update({
		speciesCommon: rec.get('speciesCommon'),
		speciesSize: rec.get('speciesSize'),
		speciesImage: rec.get('speciesImage')
    });
    Ext.getCmp('browseMap').update({
		speciesCommon: rec.get('speciesCommon'),
		speciesSize: rec.get('speciesSize'),
		speciesImage: rec.get('speciesImage')
    });
    Ext.getCmp('browseText').update({
		speciesCommon: rec.get('speciesCommon'),
 		speciesSize: rec.get('speciesSize'),
 		speciesTip: rec.get('speciesTip'),
		speciesHabitat: rec.get('speciesHabitat'),
		speciesInflight: rec.get('speciesInflight'),
		speciesStatus: rec.get('speciesStatus')
    });
    Ext.getCmp('browsePhoto').update({
    	speciesCommon: rec.get('speciesCommon'),
    	speciesSize: rec.get('speciesSize'),
        speciesImage: rec.get('speciesImage')
    });
    if(browseIndex==0){
    	Ext.getCmp('prevButton').disable();
    	Ext.getCmp('nextButton').enable();
    }else if (browseIndex==(speciesList.getCount()-1)){
        	Ext.getCmp('prevButton').enable();
        	Ext.getCmp('nextButton').disable();
        } else {
        	Ext.getCmp('prevButton').enable();
        	Ext.getCmp('nextButton').enable();
    }
}

Ext.setup({
//  tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'shorebirds_icon.png',
    glossOnIcon: true,
    onReady: function(){
    
/***********************************************
  * THE BROWSE LIST PANEL AND ASSOCIATED ITEMS *
  ***********************************************/

// First, define the buttons

	    var browseButtons = [{
	        xtype: 'splitbutton',
	        items: [{
	            active: true,
	            text: 'Name',
		        handler: function(){
					speciesList.sort('speciesCommon', 'ASC');
		        	browseList.indexBar.setVisible(1);
		        	browseList.setGrouped(1);
					browseList.refresh();
				}
	        }, {
	            text: 'Size',
	            handler: function(){
				    speciesList.sort('speciesSize', 'ASC');
		        	browseList.indexBar.setVisible(0);
		        	browseList.setGrouped(0);
					browseList.refresh();
	            }
	        }]    
	    }];
    
// Second, define the toolbar

		var browseToolbar = new Ext.Toolbar({
            xtype: 'toolbar',
		    dock: 'top',
            ui: 'light',
			items: browseButtons,
            layout: {
                pack: 'center'
		    }
		});

// Third, define the list

        var browseList = new Ext.List({
		    dockedItems: [ browseToolbar ],
            tpl: [
            	'<tpl for=".">',
            		'<div class="browseList">',
            			'<img src="images/thumbnails/{speciesImage}.png" align="left" />',
            			'<p><strong>{speciesCommon}</strong></p>',
            			'<p>{speciesSize}cm - {speciesStatus}</p>',
            		'</div>',
            	 '</tpl>'
            ],
            itemSelector: 'div.browseList',
            singleSelect: true,
            indexBar: true,
            grouped: true,
            store: speciesList,
            listeners: {
                itemtap: function(view, index, item, e){
                    browseIndex = index;
                    browseMain.setCard(1);
                    updateBrowsePanel(browseIndex);
                }
            }
        });
        
// Fourth, sort the list initially

		speciesList.sort('speciesCommon', 'ASC');

/************************************************
  * THE SPECIES DATA PANEL AND ASSOCIATED ITEMS *
  ***********************************************/
  
// First, define the carousel

		browseCarousel = new Ext.Carousel({
			ui: 'dark',
			defaults: {
				cls: 'card'
			},
			items: [{
		       	id: 'browseIllustration',
		       	scroll: 'vertical',
		       	tpl: [
		      		'<tpl for=".">',
		      			'<div class="clsDetail">',
		      				'<p><strong>{speciesCommon} ({speciesSize}cm)</strong></p>',
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
		       	id: 'browseText',
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
//		        itemSelector: 'div.browseText'
			},{
		       	id: 'browsePhoto',
		       	scroll: 'vertical',
		       	tpl: [
		      		'<tpl for=".">',
		      			'<div class="clsDetail">',
		      				'<p><strong>{speciesCommon}</strong></p>',
		      				'<img src="images/photos/{speciesImage}.jpg" width="100%" />',
		      			'</div>',
		      		'</tpl>'
		      	],
			}]
		});

// Second, define the detail panel and toolbar

		var browseDetail = new Ext.Panel({
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            },
			items: [browseCarousel],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'top',
				ui: 'dark',
				items: [{
					xtype: 'button',
					text: 'Back',
					ui: 'back',
					handler: function(){
					    browseMain.setCard(0);
					}
				},{
					xtype: 'spacer',
					flex: 1
				},{
					xtype: 'button',
					text: '\/\\',
					ui: 'action',
					id: 'prevButton',
					handler: function(){
	                    browseIndex--;
	                    updateBrowsePanel(browseIndex);
					}
				},{
					xtype: 'button',
					text: '\\\/',
					ui: 'action',
					id: 'nextButton',
					handler: function(){
	                    browseIndex++;
	                    updateBrowsePanel(browseIndex);
					}
				}]
			}]
		});
        
/***********************
  * THE MAIN CONTAINER *
  ***********************/
  
		var browseMain = new Ext.Container({
			fullscreen: true,
			layout: 'card',
			items:[browseList, browseDetail]
		}).show();
	
	}

});