package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetCourseListEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetCourseListEventHandler extends EventHandler {
	public void onSendGetCourseList(SendGetCourseListEvent evt);
}
