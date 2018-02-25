package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetTermsEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetTermsEventHandler extends EventHandler{
	public void onSendGetTerms(SendGetTermsEvent evt);

}
