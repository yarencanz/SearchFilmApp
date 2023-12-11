import './Background.css'

function Background() {
    return (
        <div>
            <div
                className="background_image"
                style={{
                    backgroundImage:
                        'url(https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg)',
                }}
            >
                <div
                    className="transition"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 95%)',
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Background
