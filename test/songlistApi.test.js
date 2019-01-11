import musicApi from '../src/app'
import assert from 'assert'
import fly from 'flyio'


export const neteaseMusic = {
    playlistId: 2383437785, // https://music.163.com/m/playlist?id=2383437785
    sid: 463452258,  // 致橡树
}
export const qqMusic = {
    playlistId: 6034995679, // 蹦迪指南：让你Hold住舞池！ https://y.qq.com/n/m/detail/taoge/index.html?id=6188246417
    sid: 225689023, // 歌曲ID 喜欢你时风好甜
}
export const xiamiMusic = {
    playlistId: 246295115,  // https://www.xiami.com/collect/246295115
    sid:2072160,     // https://www.xiami.com/song/2072160
}

describe('musicApi', () => {
    // it('QQ音乐 获取歌单详情', async () => {
    //     const {status, data} = await musicApi.getPlaylistDetail('qq', qqMusic.playlistId)
    //     assert.equal(true, status)
    // });
    // it('QQ音乐 获取歌曲详情', async () => {
    //     const detail = await musicApi.getSongDetail('qq', qqMusic.sid)
    //     assert.equal(true, detail.status)
    // });
    // it('QQ音乐 获取歌曲地址', async () => {
    //     const songurl = await musicApi.getSongUrl('qq', qqMusic.sid);
    //     assert.equal(true, songurl.status)
    // });
    //
    // it('网易音乐 获取歌单详情', async () => {
    //     const {status, data} = await musicApi.getPlaylistDetail('netease', neteaseMusic.playlistId)
    //     assert.equal(true, status)
    // });
    // it('网易音乐 获取歌曲详情', async () => {
    //     const detail = await musicApi.getSongDetail('netease', neteaseMusic.sid)
    //     assert.equal(true, detail.status)
    // });
    // it('网易音乐 获取歌曲地址', async () => {
    //     const songurl = await musicApi.getSongUrl('netease', neteaseMusic.sid);
    //     assert.equal(true, songurl.status)
    // })

    it('虾米音乐 获取歌单详情', async () => {
        const {status, data} = await musicApi.getPlaylistDetail('xiami', xiamiMusic.playlistId)
        console.log(JSON.stringify(data))
        assert.equal(true, status)
    });
    it('虾米音乐 获取歌曲详情', async () => {
        const detail = await musicApi.getSongDetail('xiami', xiamiMusic.sid)
        console.log(detail.data)
        assert.equal(true, detail.status)
    });
    it('虾米音乐 获取歌曲地址', async () => {
        const songurl = await musicApi.getSongUrl('xiami', xiamiMusic.sid);
        console.log(songurl.data)
        assert.equal(true, songurl.status)
    })
});