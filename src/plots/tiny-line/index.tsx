import { defineComponent, App } from 'vue-demi'
import { TinyLine, TinyLineOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type TinyLineChartProps = Writeable<
  Omit<BaseChartProps<TinyLineOptions>, 'chart'> & TinyLineOptions
>

const TinyLineChart = defineComponent<TinyLineChartProps>({
  name: 'TinyLineChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={TinyLine} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
TinyLineChart.install = (app: App) => {
  app.component(TinyLineChart.name, TinyLineChart)
}

export default TinyLineChart
