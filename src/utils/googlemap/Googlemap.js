import React from 'react'

const Googlemap = () => {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Google Map"
            className="gmap_iframe"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%&amp;height=80vh&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://embed-googlemap.com">google maps code generator</a>
        </div>
        <style>
          {`.mapouter{position:relative;text-align:right;width:100%;height:80vh;}
        .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:80vh;}
        .gmap_iframe {width:100%!important;height:80vh!important;}`}
        </style>
      </div>
    </>
  )
}

export default Googlemap