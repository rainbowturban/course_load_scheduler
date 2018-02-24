package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetCourseListEvent;
import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetCourseListEventHandler extends EventHandler{
	public void onReceiveGetCourseList(ReceiveGetCourseListEvent evt);
}
