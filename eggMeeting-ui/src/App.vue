<template>
  <el-container >
    <el-header class="header header-wrapper" style="background-color: rgb(84, 92, 100);">
      <div class="grid-content logo-wrapper">
        <img src="./assets/header.png" style="width: 300px; height: 50px" />
      </div>
    </el-header>
    <el-main class="main">
      <FullCalendar :options="calendarOptions" />
    </el-main>
  </el-container>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
      }
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        width:100%;
    }

.header-wrapper {
  padding: 10px 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.right-content {
  display: flex;
  justify-content: flex-end;
}
.group-input {
  margin: 0 1rem;
}
.logo-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  cursor: pointer;
  padding-left: 22px;
}
.main {
  background-color: #f0f2f5;
}
</style>
