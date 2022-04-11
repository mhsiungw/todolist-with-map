import { Loader } from '@googlemaps/js-api-loader'
import { Todo } from '../../state'

class _MapAPI {
    private loader = new Loader({
        apiKey: 'AIzaSyCLGnTKuPfIaIzNA6vgzUYCZ7bp8ngKplI',
        version: 'weekly',
    }).load()

    private map: google.maps.Map

    private markers: any[] = []

    loadMap = (): void => {
        this.loader
            .then((google) => {
                console.log('loadMap')
                this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
                    center: { lat: 23.6978, lng: 120.9605 },
                    zoom: 5,
                })
            })
            .catch((err) => {
                throw new Error(err.message)
            })
    }

    addMarker = (todo: Todo): void => {
        this.loader
            .then((google) => {
                const [lat, lng] = todo.position
                let marker = new google.maps.Marker({ map: this.map, position: { lat, lng }, id: todo.id })

                this.markers.push(marker)
                console.log('addmarker')
                console.log(this.map)
                console.log(this.markers)
                const infowindow = new google.maps.InfoWindow()
                infowindow.setContent(todo.todo)
                infowindow.open(this.map, marker)

                this.map.setCenter(marker.getPosition()!)
            })
            .catch((err) => {
                throw new Error(err.message)
            })
    }

    setCenter = (markerId: string): void => {
        let marker = this.markers.find((m) => m.id === markerId)
        this.map.setCenter(marker.getPosition())
    }

    deleteMarker = (id: string): void => {
        this.markers = this.markers.filter((m) => m.id !== id)
    }

    fetchLatLng = async (address: string): Promise<number[]> => {
        return this.loader
            .then((google) => {
                let geocoder = new google.maps.Geocoder()
                return geocoder.geocode({ address })
            })
            .then(({ results }) => {
                const lat = results[0].geometry.location.lat()
                const lng = results[0].geometry.location.lng()
                return [lat, lng]
            })
            .catch((err) => {
                throw new Error(err.message)
            })
    }
}

export const MapAPI = new _MapAPI()
