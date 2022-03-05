import { Service } from "./Server";

//  发布视频
export function publishVideo(data){
    return Service({
        url: '/publish/work',
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

// 获取某个用户的作品
export function getBlogByUserId(id){
    return Service({
        url: `/publish/ByUserId/${id}`,
        method: 'get'
    })
}


