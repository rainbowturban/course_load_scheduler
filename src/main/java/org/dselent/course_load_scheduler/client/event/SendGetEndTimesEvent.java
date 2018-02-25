package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetEndTimesAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetEndTimesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetEndTimesEvent  extends GwtEvent<SendGetEndTimesEventHandler> {
	public static Type<SendGetEndTimesEventHandler> TYPE = new Type<SendGetEndTimesEventHandler>();
	
	private SendGetEndTimesAction action;
	
	public SendGetEndTimesEvent(SendGetEndTimesAction action)
	{
		this.action = action;
	}
	
	public SendGetEndTimesAction getAction()
	{
		return action;
	}

	@Override
	public Type<SendGetEndTimesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetEndTimesEventHandler handler) {
		handler.onGetEndTimes(this);
	}

}
