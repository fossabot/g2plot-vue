import { App, defineComponent } from 'vue-demi'
import { Sankey, SankeyOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type SankeyChartProps = Writeable<
  Omit<BaseChartProps<SankeyOptions>, 'chart'> & SankeyOptions
>

const SankeyChart = defineComponent<SankeyChartProps>({
  name: 'SankeyChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Sankey} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
SankeyChart.install = (app: App) => {
  app.component(SankeyChart.name, SankeyChart)
}

export default SankeyChart
