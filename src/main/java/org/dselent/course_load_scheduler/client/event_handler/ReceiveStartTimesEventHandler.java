package org.dselent.course_load_scheduler.client.event_handler;
import org.dselent.course_load_scheduler.client.event.ReceiveStartTimesEvent;
import com.google.gwt.event.shared.EventHandler;

public interface ReceiveStartTimesEventHandler extends EventHandler
{
	  public void onReceiveStartTimes(ReceiveStartTimesEvent evt);
}