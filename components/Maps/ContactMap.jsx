import React, { Component } from "react";
import GoogleMap from "google-map-react";
import Col from "react-bootstrap/Col";
import MyMarker from "./MyMarker";

function createMapOptions(maps) {
  return {
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#007bff"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      }
    ]
  };
}

class ContactMap extends Component {
  state = {
    center: {
      lat: +"",
      lng: +""
    },
    error: false
  };

  componentDidMount() {
    this.getLatLng();
  }

  getLatLng = async () => {
    const city = this.props.data.city.trim().replace(" ", "+");
    const postal = this.props.data.postal.trim().replace(" ", "+");
    const street = this.props.data.street.trim().replace(" ", "+");
    const streetNo = this.props.data.streetNo.trim().replace(" ", "+");
    try {
      const result = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${streetNo}+${street},+${city},+${postal}&key=AIzaSyBVdAocdnydH9bap4taOya78Iaha9rpMrc`
      ).then((res) => res?.json());

      if (result) {
        const lat = result.results[0].geometry.location.lat;
        const lng = result.results[0].geometry.location.lng;
        const center = {
          lat: lat,
          lng: lng
        };
        this.setState({ center: center });
      } else {
        this.setState({ error: true });
      }
    } catch {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <>
        <Col md={this.props.columns}>
          <h2>{this.props.data.title}</h2>
          <hr />
        </Col>
        <Col
          md={this.props.data.columns}
          className="mb-4 px-0 px-md-3"
          style={{ height: "40vh" }}
        >
          {this.state.center === { lat: "", lng: "" } ? (
            ""
          ) : (
            <GoogleMap
              bootstrapURLKeys={{
                key: process.env.REACT_APP_MAP_KEY
              }}
              center={this.state.center}
              defaultZoom={this.props.zoom}
              options={createMapOptions}
              yesIWantToUseGoogleMapApiInternals
            >
              <MyMarker
                lat={this.state.center.lat}
                lng={this.state.center.lng}
                text={this.props.data.name}
              />
            </GoogleMap>
          )}
        </Col>
      </>
    );
  }
}

export default ContactMap;
