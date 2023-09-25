require('dotenv').config()
import mongoose, { Document, Model, Schema } from "mongoose";

interface IComment extends Document {
    user: object
    comment: string
}

interface IReview extends Document {
    user: object
    rating: number
    comment: string
    commentReplies: IComment[]
}

interface ILink {
    title: string
    url: string
}

interface ICourseData {
    title: string
    description: string
    videoUrl: string
    videoThumbnail: object
    videoSection: string
    videoLength: number
    videoPlayer: string
    links: ILink[]
    suggestion: string
    questions: IComment[]
}