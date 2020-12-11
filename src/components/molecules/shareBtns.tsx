import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,
    PocketShareButton,
    PocketIcon,
    EmailShareButton,
    EmailIcon,
  } from 'react-share'
import Heading from "@atoms/heading"

type ShareBtnsType = {
    url: string
}
const ShareBtns: React.FC<ShareBtnsType> = ({ url }) => {
    const iconSize = "36px"
    return (
            <div className="my-4">
                <Heading level={3}>この記事をシェアする</Heading>
                <div>
                    <FacebookShareButton url={ url } className="m-1">
                        <FacebookIcon size={ iconSize } round />
                    </FacebookShareButton>
                    <TwitterShareButton url={ url } className="m-1">
                        <TwitterIcon size={ iconSize } round />
                    </TwitterShareButton>
                    <LineShareButton url={ url } className="m-1">
                        <LineIcon size={ iconSize } round />
                    </LineShareButton>
                    <PocketShareButton url={ url } className="m-1">
                        <PocketIcon size={ iconSize } round />
                    </PocketShareButton>
                    <EmailShareButton url={ url } className="m-1">
                        <EmailIcon size={ iconSize } round />
                    </EmailShareButton>
                </div>
            </div>
    )
  }
  
  export default ShareBtns;
  