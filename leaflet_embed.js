
var map;
var markers = [];
//var ajaxRequest;
//var plotlist;
//var plotlayers=[];


// have all markers showing unless one is selected from the search, selected: not a few letters typed
function initmap() {	
    /**
	 *
	 *	declare the array of venues
	 *
	 */
	var venues = [
	{
		"name": "CIT Rory Gallagher Theatre",
		"lat": "51.8842992",
		"lng": "-8.5341983",
		"events": [
			{
				"act": "The Hayes Sisters (Manchester)",
				"day": "Friday 29 September",
				"price": "Free",
				"time": "1pm"
			}
		]
	},
	{
		"name": "An Spailpín Fánach",
		"lat": "51.896514",
		"lng": "-8.4765845",
		"events": [
			{
				"act": "The Casey Sisters; Máire Ní Chathasaigh, Nollaig Casey and Mairéad Ní Chathasaigh plus Máire Ní Chéileachair",
				"day": "Friday 29 September",
				"price": "€15",
				"time": "9.30pm"
			},
			{
				"act": "Stíleanna (Styles) Flute Concert; Sean Ryan, Aoife Granville, Mike Walsh, Joanne Quirke & more",
				"day": "Saturday 30th September",
				"price": "€10",
				"time": "2pm"
			},
			{
				"act": "The Ford Workers, Song Event",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "2pm"
			},
			{
				"act": "‘Gals at Play’; Mary Green, Josephine Marsh, Clare Sands, Áine Whelan, Karrie Sullivan & The Hayes Sisters",
				"day": "Saturday 30th September",
				"price": "€15",
				"time": "6pm"
			},
			{
				"act": "Steve Cooney, Dermot Byrnes & Bríd Harper + Granny’s Attic",
				"day": "Saturday 30th September",
				"price": "€15",
				"time": "10.00pm"
			},
			{
				"act": "Stíleanna (Styles)Fiddle Concert;  Bríd Harper (Tyrone), Mairéad Ní Mhaonaigh (Donegal), Kieran Fahy (Galway), Sorcha Costello (Clare), Caoimhe Flannery (Rockchapel) and Garry Cronin (Cork).",
				"day": "Sunday 1st October",
				"price": "€10",
				"time": "12.30pm"
			},
			{
				"act": "Song Session with George Sansome (Grannies Attic)",
				"day": "Sunday 1st October",
				"price": "Free",
				"time": "1.30pm"
			},
			{
				"act": "Stíleanna (Styles)Concertina/Box Concert; Josephine Marsh (Clare), Mary MacNamara (East Clare), Cliona Halley (Cork),  Paul Clesham (Mayo), Maura O’Connor (Sliabh Luachra), Jackie Daly (Kanturk)",
				"day": "Sunday 1st October",
				"price": "€10",
				"time": "3pm"
			},
			{
				"act": "Cork Singers Club",
				"day": "Sunday 1st October",
				"price": "Free",
				"time": "9.00pm"
			}
		]
	},
	{
		"name": "The Framemaker",
		"lat": "51.8978428",
		"lng": "-8.4720616",
		"events": [
			{
				"act": "Colm Murphy Painting Exhibition",
				"day": "(all weekend)",
				"price": "Free",
				"time": "6pm"
			}
		]
	},
	{
		"name": "SMA Community Hall Wilton",
		"lat": "51.8799664",
		"lng": "-8.5102922",
		"events": [
			{
				"act": "Cork Pipers Club, Tionol Classes, Beginners, Advanced & Reed Making",
				"day": "Saturday 30th September",
				"price": "€25 Booking corkpipersclub@gmail.com 0857426565",
				"time": "9.30-5pm"
			}
		]
	},
	{
		"name": "Cork City Children’s Library",
		"lat": "51.8969057",
		"lng": "-8.4752595",
		"events": [
			{
				"act": "Storytelling and Songs for Children",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "3pm"
			}
		]
	},
	{
		"name": "The Corner House",
		"lat": "51.901651",
		"lng": "-8.470919",
		"events": [
			{
				"act": "Lee Delta Blues Club",
				"day": "Thrusday 28 September",
				"price": "Lee Delta Blues Club; Free",
				"time": "9.30pm"
			},
			{
				"act": "Boxcar Bertha",
				"day": "Friday 29 September",
				"price": "Free",
				"time": "9pm"
			},
			{
				"act": "Songs@6 with Leif",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "6pm"
			},
			{
				"act": "Lee Valley & Rough Deal String Band Ensemble",
				"day": "Sunday 1st October",
				"price": "Free",
				"time": "7pm"
			}
		]
	},
	{
		"name": "Emmett Place",
		"lat": "51.8999859",
		"lng": "-8.4727718",
		"events": [
			{
				"act": "Food & Folk with Granny’s Attic (12.30pm), Colombian Folk Musicians (2pm) and Douglas Comhaltas Adult Group (4pm)",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "11-5pm"
			}
		]
	},
	{
		"name": "Counihan's Bar",
		"lat": "51.8977881",
		"lng": "-8.469947",
		"events": [
			{
				"act": "Bodhran/Percussion Workshop with Johnny Bongos",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "2pm"
			}
		]
	},
	{
		"name": "St Peter's Church",
		"lat": "51.8996408",
		"lng": "-8.4786399",
		"events": [
			{
				"act": "Concert; Cork Trad Trio, John Mitchell, Garry Cronin, Desi McCabe, Padraig Buckley & William Hammond",
				"day": "Thrusday 28 September",
				"price": "Free",
				"time": "1pm"
			},
			{
				"act": "Pitch’d – A Circus Arts Festival, Children’s Workshop at",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "11.30am & 2.30pm"
			},
			{
				"act": "The Hayes Sisters (Manchester)",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "1pm Lunch time Concert"
			},
			{
				"act": "Cork Pipers Club Concert; Diarmuid Moynihan, Ciarán Ryan, Dave Hegarty, Rosaleen & Ciara O’ Leary and Eoin O Riabhaigh",
				"day": "Sunday 1st October",
				"price": "€10",
				"time": "2.30pm"
			}
		]
	},
	{
		"name": "Triskel Christchurch",
		"lat": "51.8974504",
		"lng": "-8.4766479",
		"events": [
			{
				"act": "Andy Irvine plus Tríona & Maighread Ní Dhomhnaill",
				"day": "Thrusday 28 September",
				"price": "€22/€20",
				"time": "8pm"
			},
			{
				"act": "Mick Daly, Jarlath Henderson, Cathy Jordan",
				"day": "Friday 29 September",
				"price": "€18/€20",
				"time": "8pm"
			}
		]
	},
	{
		"name": "Crane Lane",
		"lat": "51.8977489",
		"lng": "-8.4696355",
		"events": [
			{
				"act": "Noel Brazil Song Competition €450 in prizes, entries @ admin@mutantspace.com.",
				"day": "Thrusday 28 September",
				"price": "unknown",
				"time": "7pm"
			},
			{
				"act": "The Band Anna",
				"day": "Thrusday 28 September",
				"price": "Free",
				"time": "12pm"
			},
			{
				"act": "The Bluez Crew",
				"day": "Sunday 1st October",
				"price": "Free",
				"time": "11pm late gig"
			}
		]
	},
	{
		"name": "Aula Máxima UCC",
		"lat": "51.8938319",
		"lng": "-8.4918082",
		"events": [
			{
				"act": "Concert with Colombian Musicians (as part of the FUAIM UCC series)",
				"day": "Friday 29 September",
				"price": "Free",
				"time": "1pm"
			}
		]
	},
	{
		"name": "The Oliver Plunkett",
		"lat": "51.8982162",
		"lng": "-8.4695729",
		"events": [
			{
				"act": "Granny’s Attic (Warwick) & Torcán",
				"day": "Friday 29 September",
				"price": "€10",
				"time": "6pm"
			},
			{
				"act": "Band",
				"day": "Friday 29 September",
				"price": "Free",
				"time": "11pm late gig"
			},
			{
				"act": "Colm Murphy, Alec Finn, Sean Ryan & Brendan Begley (on stage at 5pm) + Geanntraí",
				"day": "Saturday 30th September",
				"price": "€15",
				"time": "5pm"
			},
			{
				"act": "Two Time Polka",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "12am late gig"
			},
			{
				"act": "‘The Corner House Set’; Frankie Gavin, Alec Finn, Aidan Coffey, Colm Murphy, Charlie Piggott,",
				"day": "Sunday 1st October",
				"price": "€20",
				"time": "5pm"
			}
		]
	},
	{
		"name": "Everyman Palace",
		"lat": "51.9014229",
		"lng": "-8.468497",
		"events": [
			{
				"act": "DONOVAN in concert with Jessie Kennedy",
				"day": "Friday 29 September",
				"price": "€32",
				"time": "8pm"
			}
		]
	},
	{
		"name": "Rory Gallagher Music Library",
		"lat": "51.89671",
		"lng": "-8.475234",
		"events": [
			{
				"act": "Joe O Donnell, Lecture/Talk",
				"day": "Saturday 30th September",
				"price": "Free",
				"time": "3.30pm"
			}
		]
	},
	{
		"name": "CIT Cork School of Music",
		"lat": "51.8961241",
		"lng": "-8.4683832",
		"events": [
			{
				"act": "Master classes; Steve Cooney (Guitar), Mary MacNamara (concertina), and Sliabh Luachra Tunes Workshop with Matt Cranitch & Jackie Daly",
				"day": "Saturday 30th September",
				"price": "€15",
				"time": "11am"
			},
			{
				"act": "A Tribute to Seamus Creagh; Na Mooneys; Mairéad & Anna Ní Mhaonaigh, Gearóid & Ciarán Ó Maonaigh, Nia Byrne & Manus Lunny,  Matt Cranitch & Jackie Daly, Aiden Coffey, Alec  Finn & Eoin O Riabhaigh, Mary MacNamara & Sorcha Costello",
				"day": "Saturday 30th September",
				"price": "€20",
				"time": "8pm"
			}
		]
	},
	{
		"name": "Deerpark CBS",
		"lat": "51.8899344",
		"lng": "-8.4734561",
		"events": [
			{
				"act": "Céilí Mór – ARUNDO + Young Co Clare Céilí Band (Tulla), Fear a’ Ti William Hammond",
				"day": "Sunday 1st October",
				"price": "Free",
				"time": "2pm"
			}
		]
	},
	{
		"name": "Cyprus Avenue",
		"lat": "51.8982301",
		"lng": "-8.4697829",
		"events": [
			{
				"act": "Jake Carter",
				"day": "Friday 29 September",
				"price": "€15",
				"time": "8pm"
			},
			{
				"act": "KILA",
				"day": "Saturday 30th September",
				"price": "€18.50",
				"time": "7.30pm"
			},
			{
				"act": "Joe O’Donnell’s Shkayla -Gaodhal’s Vision, (The Diviners – Eoin Jordan, Anthony Ruby & Mick Pierce)",
				"day": "Sunday 1st October",
				"price": "€15",
				"time": "8pm"
			}
		]
	}
];


/**
 * 
 *          thinking a little now of having a bs-select inside the popup now too
 *      
 *      Thing is that if might be nice to have the acts in the search too.
 *      If this is done and the popup opens at their act, if does not say the location or the venue on that popup
 * 
 */


	
	/**
	 *
	 *	override the default close method
	 *
	 */
	L.Map = L.Map.extend({
		// @method closePopup(popup?: Popup): this
		// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
		closePopup: function (popup) {
			if (!popup || popup === this._popup) {
				
				
				// when a popup is open on an event for a venue and another venue is clicked the popup reverts to the venue popup but doesn't close
				
				
				popup = this._popup;
				cur_contents = popup._content; // this.getPopup().getContent();
            	if (typeof cur_contents === 'string' || cur_contents instanceof String) {                
//                 	console.log('its a string');
                	this._popup.setContent(contents);
				} else {
					this._popup = null;
					if (popup) {				// meh this works
						this.removeLayer(popup); 
					}
				}
			}
			return this;
		}
	});
	
    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 13, maxZoom: 18, attribution: osmAttrib});        
	
	// set up the map
    map = new L.Map('map');

    // start the map in Cork
    map.setView(new L.LatLng(51.898, -8.477), 15);      
    map.addLayer(osm);	
	
//     console.log('number of venues: ' + venues.lenght );
//     var markers = [];
    var containers = [];
    var contents;
    var venueNames = [];
    for (var i = 0; i , i < venues.length; i++) {
        console.log('venue: ' + venues[i].name + ' ' + venues[i].lat + ' ' + venues[i].lng);
        var marker = L.marker( [venues[i].lat, venues[i].lng] ).addTo( map );
        marker.venue = venues[i].name;

        containers[i] = createContainerList(venues[i], marker, i);
        marker.bindPopup(containers[i][0], {closeOnClick: false});
        marker.on('popupopen', function() {
            contents = this.getPopup().getContent();
        });
        markers[i] = marker;
    }
	setupDropDown(venues);
}

/**
 *
 *
 *
 */
function setupDropDown(venues) {	
	var sel = $('select');
	for (var i = 0; i , i < venues.length; i++) {
// 		console.log(venues[i].name);
		sel.append('<option value="">' + venues[i].name + '</option>');
	}
}

function createContainerList(venue, marker, num) {
    var n = venue.events.length;
    var container = $('<div />', {text:venue.name});
    var venue_events = $('<ul />', {class:'event_list'}); 
    var evts = '';
    for (var i = 0; i < n; i++) {
        evt_id = "venue_" + num + "_event_" + i;
        evts += "<li><a href='#' class='smallPolygonLink' id=" + evt_id  + ">" + venue.events[i].day + " " + venue.events[i].time + "</a></li>"; 
        container.on('click', '#'+evt_id, function() {
            var li = $(this).parent();
            var index = li.parent().children().index(li); // would be better to use id...
            marker._popup.setContent('<div>' + venue.events[index].act + '<p class="price">' + venue.events[index].price + '</div>'); 
        });
    }    
    venue_events.html(evts)
    container.append(venue_events);      
         
    return container;
}
