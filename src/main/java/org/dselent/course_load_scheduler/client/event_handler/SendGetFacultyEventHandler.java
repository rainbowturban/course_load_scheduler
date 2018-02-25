package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetFacultyEvent;
import com.google.gwt.event.shared.EventHandler;

public interface SendGetFacultyEventHandler extends EventHandler{
	void onSendGetFaculty(SendGetFacultyEvent evt);
}
