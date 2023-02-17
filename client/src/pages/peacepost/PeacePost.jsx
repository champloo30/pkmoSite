import './peacepost.scss'
import BHM from '../../assets/bhm.png'
import Anniversary from '../../components/peace-post/anniversary/Anniversary'
import SickAndShutIn from '../../components/peace-post/sickandshutin/SickAndShutIn'
import Slider from '../../components/peace-post/slider/Slider'
import PostCalendar from '../../components/peace-post/post-calendar/PostCalendar'

export default function PeacePost() {
    return (
        <div className="peacepost">
            <div className="post-hero">
                <h1>Peace Post</h1>
                <div className="bhm-container">
                    <img src={BHM} alt="" />
                    <div className="bhm-text">
                        <p>
                            February marks Black History Month, a tradition that got its start in the Jim Crow era and was officially recognized in 1976 as part of the nation's bicentennial celebrations. It aims to honor the contributions that African Americans have made and to recognize their sacrifices.
                        </p>
                        <span>
                            “Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.” —Barack Obama
                        </span>
                    </div>
                </div>
            </div>
            <div className="center">
                <Anniversary />
                <SickAndShutIn />
            </div>
            <Slider />
            <PostCalendar />
        </div>
    )
}
