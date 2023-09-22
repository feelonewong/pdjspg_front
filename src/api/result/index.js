// 整体结果接口
import request from '@/utils/request'

export function getScoreRate() {
    return request({
      url: '/biz/overallResults/getDataScoringRate',
      method: 'get'
    })
  }