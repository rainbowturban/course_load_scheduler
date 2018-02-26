package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetOneFacultySectionInfoEvent;
import com.google.gwt.event.shared.EventHandler;

public interface SendGetOneFacultySectionInfoEventHandler extends EventHandler{
	public void onSendGetOneFacultySectionInfo(SendGetOneFacultySectionInfoEvent evt);
}