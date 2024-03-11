
import './Card.css'



export const Card = ({ maxtemp, mintemp, humadity, windy, cloudy }) => {
    return ( <>
    <div className='maindiv'>
        <p className="details">Weather Details...</p>
        <p className='drizzle'>thunderstorm with light drizzle</p>
        <div className='box'>
            <div className='box2'>
                <p className='txt1'>Temp max</p>
                <div className='box3'>
                   <p className='txt2'>{maxtemp}°</p>
                   <img src="tempmax.svg" alt="" />
                </div>
            </div>
            <div className='box2'>
                <p className='txt1'>Temp min</p>
                <div className='box3'>
                   <p className='txt2'>{mintemp}°</p>
                   <img src="tempmin.svg" alt="" />
                </div>
            </div>
            <div className='box2'>
                <p className='txt1'>Humadity</p>
                <div className='box3'>
                   <p className='txt2'>{humadity}%</p>
                   <img src="humadity.svg" alt="" />
                </div>
            </div>
            <div className='box2'>
                <p className='txt1'>Cloudy</p>
                <div className='box3'>
                   <p className='txt2'>{cloudy}%</p>
                   <img src="cloudy.svg" alt="" />
                </div>
            </div>
            <div className='box2'>
                <p className='txt1'>Wind</p>
                <div className='box3'>
                   <p className='txt2 windy'>{windy}km/h</p>
                   <img src="wind.svg" alt="" />
                </div>
            </div>
            <div className='line'></div>
        </div>
    </div>
    </>
    ) 
}

