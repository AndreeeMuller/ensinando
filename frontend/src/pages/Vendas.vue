<template>
  <q-page padding>
    <calendar-view
        :show-date="showDate"
        class="theme-default holiday-us-traditional holiday-us-official">
        <calendar-view-header
            slot="header"
            slot-scope="t"
            :header-props="t.headerProps"
            @input="setShowDate" />
    </calendar-view>
  </q-page>
</template>

<script>

import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
require("vue-simple-calendar/static/css/default.css")
require("vue-simple-calendar/static/css/holidays-us.css")

export default {
  components: {
      CalendarView,
      CalendarViewHeader,
  },
  data () {
    return {
      showDate: new Date()
    }
  },
  methods: {
      setShowDate(d) {
          this.showDate = d;
      },
  }
}
</script>
