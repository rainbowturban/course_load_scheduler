package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.Action;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.user.client.ui.HasWidgets;

public abstract class DisplayEvent<A extends Action, E extends EventHandler> extends BaseEvent<A, E>
{
	// What should this be?
	// Would a "parent" view or associated presenter be better?
	//		Would that generalize/work?
	// When lacking an oracle, try and see what happens...
	private HasWidgets container;
	
	public DisplayEvent(A action, HasWidgets container)
	{
		super(action);
		this.container = container;
	}
	
	public HasWidgets getContainer()
	{
		return container;
	}
}