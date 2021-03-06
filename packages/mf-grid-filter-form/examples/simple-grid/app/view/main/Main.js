/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 */
Ext.define('SimpleGrid.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Mayflower.grid.feature.FilterForm',
        'SimpleGrid.store.LocalNumber',
        'SimpleGrid.view.grid.RemoteNumberGrid',
        'SimpleGrid.view.main.MainController',
        'SimpleGrid.view.main.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: 'Grid filter form demo',
        width: 250,
        split: true
    },{
        height: 400,
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Grid with filter form',
            items: [{
                xtype: 'grid',
                layout: 'fit',
                features: [Ext.create('Mayflower.grid.feature.FilterForm')],
                store: {
                    type: 'localnumber'
                },
                columns: [{
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1,
                    filter: {
                        type: 'string',
                        value: 'T'
                    },
                    filterOption: {
                        resettable: true
                    }
                }]
            }]
        }, {
            title: 'Grid with collapsible filter form and paging bar',
            items: [{
                xtype: 'grid',
                layout: 'fit',
                features: [{
                    ftype: 'filterform',
                    collapsible: true
                }],
                store: {
                    type: 'localnumber',
                    pageSize: 5
                },
                columns: [{
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1,
                    filterOption: {}
                }],
                bbar: [{xtype: 'pagingtoolbar', store: {type: 'localnumber'}}]
            }]
        }, {
            title: 'Remote Grid with filter from and paging bar',
            items: [{
                xtype: 'remotenumbergrid',
                layout: 'fit',
                height: 300
            }]
        }, {
            title: 'Grid with ordered paging bar and 2 columns filter form',
            items: [{
                xtype: 'grid',
                layout: 'fit',
                id: 'orderedPagingGrid',
                features: [{
                    ftype: 'filterform',
                    columns: 2
                }],
                store: {
                    type: 'localnumber',
                    pageSize: 5
                },
                columns: [{
                    text: 'Id',
                    dataIndex: 'id',
                    flex: 1,
                    filterOption: {}
                }, {
                    text: 'Description',
                    dataIndex: 'description',
                    flex: 1,
                    filterOption: {
                        formPosition: 1,
                        resettable: true
                    }
                }, {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1,
                    filterOption: {formPosition: 0}
                }],
                bbar: [{xtype: 'pagingtoolbar', store: {type: 'localnumber'}}]
            }]
        }]
    }]
});
