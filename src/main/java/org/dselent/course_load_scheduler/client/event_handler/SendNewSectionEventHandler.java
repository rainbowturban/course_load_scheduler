package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendNewSectionEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendNewSectionEventHandler extends EventHandler{
	public void onSendNewSection(SendNewSectionEvent evt);

}
