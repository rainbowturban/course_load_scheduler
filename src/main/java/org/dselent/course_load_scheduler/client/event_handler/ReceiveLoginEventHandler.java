package org.dselent.course_load_scheduler.client.event_handler;
import org.dselent.course_load_scheduler.client.event.ReceiveLoginEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveLoginEventHandler extends EventHandler
{
	  public void onReceiveLogin(ReceiveLoginEvent evt);
}