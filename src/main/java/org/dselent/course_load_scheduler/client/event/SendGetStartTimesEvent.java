package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetStartTimesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetStartTimesEvent extends GwtEvent<SendGetStartTimesEventHandler> {
	public static Type<SendGetStartTimesEventHandler> TYPE = new Type<SendGetStartTimesEventHandler>();
	
	private SendGetStartTimesAction action;
	
	public SendGetStartTimesEvent(SendGetStartTimesAction action)
	{
		this.action = action;
	}
	
	public SendGetStartTimesAction getAction()
	{
		return action;
	}

	@Override
	public Type<SendGetStartTimesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetStartTimesEventHandler handler) {
		handler.onGetStartTimes(this);
	}

}
