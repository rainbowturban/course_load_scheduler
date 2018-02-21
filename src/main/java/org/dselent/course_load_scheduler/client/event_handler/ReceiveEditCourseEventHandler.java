package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveEditCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveEditCourseEventHandler extends EventHandler{
	public void onReceiveEditCourse(ReceiveEditCourseEvent evt);
}
