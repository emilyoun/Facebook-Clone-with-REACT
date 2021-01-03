import React from 'react'
import './Widgets.css'

/*
1. You have entered the correct Page URL
2. Your page is unpublished.
3.  Please make sure the Page doesn't have any restriction at all. For example Age restriction or location restriction. If you have any restriction on your Page, the Page will not show on Facebook Page Plugin.
*/

function Widgets() {
    return (
        <div className='widgets'>
            {/* https://developers.facebook.com/docs/plugins/page-plugin/ */}
            <iframe
                title='widgets'
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="100%"
                style={{ border: 'none', overflow: 'hidden'}}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default Widgets
