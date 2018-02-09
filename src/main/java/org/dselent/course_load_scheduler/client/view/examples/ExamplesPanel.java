package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class ExamplesPanel extends Composite {

	private static ExamplesPanelUiBinder uiBinder = GWT.create(ExamplesPanelUiBinder.class);

	interface ExamplesPanelUiBinder extends UiBinder<Widget, ExamplesPanel> {
	}

	public ExamplesPanel() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
