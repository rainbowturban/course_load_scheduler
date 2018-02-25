package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetTermsEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetTermsEventHandler extends EventHandler{
	public void onReceiveGetTerms(ReceiveGetTermsEvent evt);

}
