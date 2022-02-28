import { Service } from "./Server";

//  发布视频
export function publishVideo(data){
    return Service({
        url: '/publish/video',
        data
    })
}


// 查询某个视频
export function getBlogInfo(id){
    return Service({
        url: `/publish/${id}`,
        method: 'get'
    })
}

