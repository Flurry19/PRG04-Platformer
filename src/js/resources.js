import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import dinoImage from '../images/dino.png'
import backgroundImage from '../images/background3.png'
import portalImage from '../images/portal.png'
import startbuttonImage from '../images/start.png'
import angrydinoImage from '../images/angrydino.png'
import retrybuttonImage from '../images/retrybutton.png'
import coinImage from '../images/coin.webp'

const Resources = {
    Dino: new ImageSource(dinoImage),
    Background: new ImageSource(backgroundImage),
    Portal: new ImageSource(portalImage),
    Startbutton: new ImageSource(startbuttonImage),
    Angrydino: new ImageSource(angrydinoImage),
    Retrybutton: new ImageSource(retrybuttonImage),
    Coin: new ImageSource(coinImage),
}
const ResourceLoader = new Loader([Resources.Dino, Resources.Background, Resources.Portal, Resources.Startbutton, Resources.Angrydino, Resources.Retrybutton, Resources.Coin])

export { Resources, ResourceLoader }